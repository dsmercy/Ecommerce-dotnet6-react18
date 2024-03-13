-- ================= EXECUTION SECTION =========================
--EXEC GENERIC_CRUD @Table = 'Product',@JSON_STRING = '{"Id":"f8cc8d18-81d4-43ba-9e19-38e84a8f02d4","ProductName":"Potato","CategoryId":"a3572cfb-5de3-4fc4-a0aa-68b806b636e5","Quantity":100,"Price":28.0,"OfferPrice":25.0,"Description":"Potato is a starchy vegetable which is popularly used in many recipes. Due to their blend taste, peeled Potatoes pair well with a wide number of vegetables. These are also used to make chips and snacks.","InStock":true,"CreatedOn":"3/11/2024 1:16:59 AM"}',@ActionType = 'create';
--EXEC GENERIC_CRUD @Table = 'Product',@JSON_STRING = '{"Id":"f8cc8d18-81d4-43ba-9e19-38e84a8f02d7","ProductName":"prod1","CategoryId":"a3572cfb-5de3-4fc4-a0aa-68b806b636e5","Quantity":10,"Price":100,"OfferPrice":90,"Description":"Potato is a starchy vegetable which is popularly used in many recipes. Due to their blend taste peeled Potatoes pair well with a wide number of vegetables. These are also used to make chips and snacks.","InStock":true}',@ActionType = 'create';
--EXEC GENERIC_CRUD @Table = 'Images',@JSON_STRING = '{"Id":2, "ImageType":"SampleType1", "ImagePath":"SamplePath","ProductId":"SampleProductId"}',@ActionType = 'create';
--EXEC GENERIC_CRUD @Table = 'Images',@ActionType = 'list';
--EXEC GENERIC_CRUD @Table = 'Images',@JSON_STRING = '{"Id":"1"}',@ActionType = 'listbyid';
--EXEC GENERIC_CRUD @Table = 'Images',@JSON_STRING = '{"Id":"7"}',@ActionType = 'remove';
-- ================= PROCEDURE DEFINITION SECTION =========================
CREATE PROCEDURE [dbo].[GENERIC_CRUD] @Table NVARCHAR(50)
	,@JSON_STRING NVARCHAR(MAX) = NULL
	,@ActionType VARCHAR(20)
AS
BEGIN
	--SET NOCOUNT ON;
	-- Declare variables
	DECLARE @Id NVARCHAR(200)
	DECLARE @Columns NVARCHAR(MAX) = ''
	DECLARE @Values NVARCHAR(MAX) = ''
	DECLARE @Key NVARCHAR(MAX)
	DECLARE @SetClause NVARCHAR(MAX) = ''
	DECLARE @SqlQuery NVARCHAR(MAX)
	-- Declare response variables
	DECLARE @ResponseNumber INT = 0
		,@ResponseMessage NVARCHAR(250)
		,@ResponseData NVARCHAR(MAX)
		,@ErrorObjectName NVARCHAR(50)
		,@ERROR_LINE BIGINT;

	BEGIN TRY
		-- Begin transaction
		BEGIN TRANSACTION;

		SET @Id = JSON_VALUE(@JSON_STRING, '$.Id')

		-- ================= Perform CRUD operations based on ActionType =========================
		-- ================= create ActionType =========================
		IF @ActionType = 'create'
		BEGIN
			-- Get values from JSON string
			-- ====================		
			SELECT @Key = [key]
				,@Columns += ',' + QUOTENAME([key])
				,@Values += ',' + CASE 
    WHEN [key] = 'Description'
        THEN 'N''' + REPLACE(value, '''', '''''') + ''''
    WHEN ISJSON(value) = 1
        THEN 'N''' + REPLACE(value, '''', '''''') + ''''
    ELSE QUOTENAME(value, '''')
    END
			FROM OPENJSON(@JSON_STRING)

			SET @Columns = STUFF(@Columns, 1, 1, '');
			SET @Values = STUFF(@Values, 1, 1, '');

			DECLARE @InsertStatement NVARCHAR(MAX) = 'INSERT INTO ' + @Table + ' (' + @Columns + ') VALUES (' + @Values + ')';
			
			EXEC sp_executesql @InsertStatement;

			SET @ResponseNumber = 1;
			SET @ResponseMessage = @Table + ' record successfully created';
			SET @ResponseData = NULL;
		END
				-- ================= update ActionType =========================
		ELSE IF @ActionType = 'update'
		BEGIN
			SELECT @Key = [key]
				,@SetClause += ',' + QUOTENAME([key], '[') + ' = ' + CASE 
					WHEN ISJSON(value) = 1
						THEN '"' + REPLACE(value, '"', '\"') + '"'
					ELSE QUOTENAME(value, '''')
					END
			FROM OPENJSON(@JSON_STRING)

			SET @SetClause = STUFF(@SetClause, 1, 1, '')

			DECLARE @UpdateStatement NVARCHAR(MAX) = 'UPDATE ' + @Table + ' SET ' + @SetClause + ' WHERE Id = ''' + @Id + ''''

			EXEC sp_executesql @UpdateStatement;

			SET @ResponseNumber = 1;
			SET @ResponseMessage = @Table + ' record successfully updated';
			SET @ResponseData = NULL;
		END
				-- ================= list ActionType =========================
		ELSE IF @ActionType = 'list'
		BEGIN
			-- Select all records
			SET @SqlQuery = '
        SET @ResponseNumber = 1;
        SET @ResponseMessage = CONVERT(NVARCHAR(200), (SELECT COUNT(*) FROM ' + QUOTENAME(@Table) + ')) + '' '' + ''' + @Table + ''' + '' data fetched successfully!'';
        SET @ResponseData = (
                SELECT *
                FROM ' + @Table + '
                FOR JSON PATH
                );';

			-- Execute the dynamic SQL
			EXEC sp_executesql @SqlQuery
				,N'@ResponseNumber INT OUTPUT, @ResponseMessage NVARCHAR(200) OUTPUT, @ResponseData NVARCHAR(MAX) OUTPUT'
				,@ResponseNumber OUTPUT
				,@ResponseMessage OUTPUT
				,@ResponseData OUTPUT;
		END
				-- ================= listbyid ActionType =========================
		ELSE IF @ActionType = 'listbyid'
		BEGIN
			SET @SqlQuery = '
        SET @ResponseNumber = 1;
        SET @ResponseMessage = CONVERT(NVARCHAR(200), (SELECT COUNT(*) FROM ' + QUOTENAME(@Table) + ' WHERE Id = ''' + @Id + ''')) + '' '' + ''' + @Table + ''' + '' data fetched successfully!'';
        SET @ResponseData = (
                SELECT *
                FROM ' + @Table + ' WHERE Id = ''' + @Id + ''' FOR JSON PATH
                );';

			-- Execute the dynamic SQL
			EXEC sp_executesql @SqlQuery
				,N'@ResponseNumber INT OUTPUT, @ResponseMessage NVARCHAR(200) OUTPUT, @ResponseData NVARCHAR(MAX) OUTPUT'
				,@ResponseNumber OUTPUT
				,@ResponseMessage OUTPUT
				,@ResponseData OUTPUT;
		END
				-- ================= remove ActionType =========================
		ELSE IF @ActionType = 'remove'
		BEGIN
			-- Remove record by ID
			DECLARE @RemoveQuery NVARCHAR(MAX);

			SET @RemoveQuery = 'DELETE FROM ' + QUOTENAME(@Table) + ' WHERE [Id] = ''' + @Id + '''';

			EXEC sp_executesql @RemoveQuery;

			SET @ResponseNumber = 1;
			SET @ResponseMessage = @Table + ' record removed successfully';
			SET @ResponseData = NULL;
		END
		ELSE
		BEGIN
			-- Invalid ActionType
			SET @ResponseNumber = - 1;
			SET @ResponseMessage = 'Invalid ActionType';
			SET @ErrorObjectName = ERROR_PROCEDURE();
			SET @ResponseData = '';
			SET @ERROR_LINE = ERROR_LINE();

			GOTO ERR_HANDLER;
		END

		-- Commit transaction
		COMMIT TRANSACTION;
	END TRY

	-- ================= catch transaction =========================
	BEGIN CATCH
		-- Rollback transaction on error
		-- =======================	
		IF @@TRANCOUNT > 0
			ROLLBACK TRANSACTION;

		SET @ResponseNumber = ERROR_NUMBER();
		SET @ResponseMessage = ERROR_MESSAGE();
		SET @ErrorObjectName = ERROR_PROCEDURE();
		SET @ERROR_LINE = ERROR_LINE();
	END CATCH

	-- RESPONSE SECTION
	ERR_HANDLER:

	-- ================= Save error to error log table =========================
	INSERT INTO ERROR_LOG (
		ERROR_NUMBER
		,ERROR_LINE
		,ERROR_MESSAGE
		,OBJECT_NAME
		,CREATED_AT
		)
	VALUES (
		@ResponseNumber
		,@ERROR_LINE
		,@ResponseMessage
		,@ErrorObjectName
		,GETDATE()
		);

	-- ================= Return response variables =========================
	SELECT @ResponseNumber AS ResponseNumber
		,@ResponseMessage AS ResponseMessage
		,@ResponseData AS ResponseData
		,@ErrorObjectName AS [OBJECT_NAME];
END