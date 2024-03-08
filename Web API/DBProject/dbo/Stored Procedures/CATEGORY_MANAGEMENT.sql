-- =============================================
/*
EXEC CATEGORY_MANAGEMENT @JSON_STRING='{"Id":"","CategoryName":"Fruits","ParentId":0}', @ActionType='create'
EXEC CATEGORY_MANAGEMENT @JSON_STRING='{"Id":"","CategoryName":"Vegetables","ParentId":"0"}', @ActionType='update'
EXEC CATEGORY_MANAGEMENT @JSON_STRING=null, @ActionType='list'
EXEC CATEGORY_MANAGEMENT @JSON_STRING='{"Id":""}', @ActionType='listbyid'
EXEC CATEGORY_MANAGEMENT @JSON_STRING='{"Id":""}', @ActionType='remove'
*/
-- =============================================
CREATE PROCEDURE [dbo].[CATEGORY_MANAGEMENT]
	--  PARAMETERS FOR STORED PROCEDURE
	@JSON_STRING NVARCHAR(MAX) = NULL
	,@ActionType VARCHAR(20)
AS
--  DECLARE GLOBAL VARIABLES 
DECLARE @Id VARCHAR(200)
	,@CategoryName VARCHAR(50)
	,@ParentId VARCHAR(200);
--  RESPONSE DECLARATIONS 
DECLARE @ResponseNumber INT = 0
	,@ResponseMessage VARCHAR(250)
	,@ResponseData VARCHAR(MAX)
	,@ErrorObjectName VARCHAR(50)
	,@ERROR_LINE BIGINT

BEGIN
	-- GET VALUES FROM @JSON_STRING    
	SET @Id = JSON_VALUE(@JSON_STRING, '$.Id')
	SET @CategoryName = JSON_VALUE(@JSON_STRING, '$.CategoryName')
	SET @ParentId = JSON_VALUE(@JSON_STRING, '$.ParentId')
	SET NOCOUNT ON;

	--Create SECTION =============================================
	IF @ActionType = 'create'
	BEGIN
	-- VALIDATE PARAMS 
		IF (
				@CategoryName IS NULL OR @CategoryName = ''
				OR @ParentId IS NULL
				)
		BEGIN
			SET @ResponseNumber = - 1
			SET @ResponseMessage = 'Missing field(s)!'
			SET @ErrorObjectName = ERROR_PROCEDURE()
			SET @ResponseData = ''
			SET @ERROR_LINE = ERROR_LINE()

			GOTO ERR_HANDLER
		END
		BEGIN TRY
			-- CREATE CATEGORY
			INSERT INTO Category (
				Id
				,CategoryName
				,ParentId
				)
			VALUES (
			@Id
				,@CategoryName
				,@ParentId
				)

			SET @Id = SCOPE_IDENTITY();
			SET @ResponseNumber = 1
			SET @ResponseMessage = 'Category successfully saved'
			SET @ResponseData = NULL
		END TRY

		BEGIN CATCH
			SET @ResponseNumber = ERROR_NUMBER()
			SET @ResponseMessage = ERROR_MESSAGE()
			SET @ErrorObjectName = ERROR_PROCEDURE()
			SET @ERROR_LINE = ERROR_LINE()

			GOTO ERR_HANDLER
		END CATCH
	END

	--Update SECTION =============================================
	IF @ActionType = 'update'
	BEGIN
		BEGIN TRY
			IF NOT EXISTS (
					SELECT 1
					FROM Category
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'Category not found'
				SET @ResponseData = NULL
			END
			ELSE
			BEGIN
				-- UPDATE CATEGORY
				UPDATE [dbo].[Category]
				SET [CategoryName] = COALESCE(@CategoryName, CategoryName)
					,[ParentId] = COALESCE(@ParentId, ParentId)
				WHERE Id = @Id

				SET @Id = @Id;
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'Category successfully updated'
				SET @ResponseData = NULL
			END
		END TRY

		BEGIN CATCH
			SET @ResponseNumber = ERROR_NUMBER()
			SET @ResponseMessage = ERROR_MESSAGE()
			SET @ErrorObjectName = ERROR_PROCEDURE()
			SET @ERROR_LINE = ERROR_LINE()

			GOTO ERR_HANDLER
		END CATCH
	END

	--Select all SECTION =============================================
	IF @ActionType = 'list'
	BEGIN
		BEGIN TRY
			-- GET Category
			SET @ResponseNumber = 1
			SET @ResponseMessage = CONVERT(VARCHAR(200), (
						SELECT COUNT(Id)
						FROM Category
						)) + ' Category data successfully fetched'
			SET @ResponseData = (
					SELECT [Id]
						,[CategoryName]
						,[ParentId]
					FROM Category
					FOR JSON PATH
						
					)
		END TRY

		BEGIN CATCH
			SET @ResponseNumber = ERROR_NUMBER()
			SET @ResponseMessage = ERROR_MESSAGE()
			SET @ErrorObjectName = ERROR_PROCEDURE()
			SET @ERROR_LINE = ERROR_LINE()

			GOTO ERR_HANDLER
		END CATCH
	END

	--Select by Id SECTION =============================================
	IF @ActionType = 'listbyid'
	BEGIN
		BEGIN TRY
			IF NOT EXISTS (
					SELECT 1
					FROM Category
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'Category not found'
				SET @ResponseData = NULL
			END
			ELSE
			BEGIN
				-- GET Category
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'Category data successfully fetched'
				SET @ResponseData = (
						SELECT [Id]
							,[CategoryName]
							,[ParentId]
						FROM Category
						WHERE Id = @Id
						FOR JSON PATH
							
						)
			END
		END TRY

		BEGIN CATCH
			SET @ResponseNumber = ERROR_NUMBER()
			SET @ResponseMessage = ERROR_MESSAGE()
			SET @ErrorObjectName = ERROR_PROCEDURE()
			SET @ERROR_LINE = ERROR_LINE()

			GOTO ERR_HANDLER
		END CATCH
	END

	--Remove by Id SECTION =============================================
	IF @ActionType = 'remove'
	BEGIN
		BEGIN TRY
			IF NOT EXISTS (
					SELECT 1
					FROM Category
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'Category not found'
				SET @ResponseData = NULL
			END
			ELSE
			BEGIN
				-- Delete Category
				DELETE
				FROM Category
				WHERE Id = @Id

				SET @Id = @Id;
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'Category Removed successfully'
				SET @ResponseData = NULL
			END
		END TRY

		BEGIN CATCH
			SET @ResponseNumber = ERROR_NUMBER()
			SET @ResponseMessage = ERROR_MESSAGE()
			SET @ErrorObjectName = ERROR_PROCEDURE()
			SET @ERROR_LINE = ERROR_LINE()

			GOTO ERR_HANDLER
		END CATCH
	END

	--  ========================================================
	IF @@TRANCOUNT > 0
		COMMIT TRANSACTION;

	SET XACT_ABORT OFF

	-- RESPONSE SECTION ========================================================
	--
	ERR_HANDLER:

	IF @ResponseNumber <> 1
	BEGIN
		DECLARE @TRAN INT

		SELECT @TRAN = @@TRANCOUNT

		IF @TRAN > 1
			COMMIT TRANSACTION

		IF @TRAN = 1
			ROLLBACK TRANSACTION

		INSERT INTO ERROR_LOG (
			ERROR_NUMBER
			,ERROR_LINE
			,ERROR_MESSAGE
			,OBJECT_NAME
			)
		VALUES (
			@ResponseNumber
			,@ERROR_LINE
			,@ResponseMessage
			,@ErrorObjectName
			)
	END

	SELECT @ResponseNumber AS ResponseNumber
		,@ResponseMessage AS ResponseMessage
		,@ResponseData AS ResponseData
		,@ErrorObjectName AS [OBJECT_NAME]
END