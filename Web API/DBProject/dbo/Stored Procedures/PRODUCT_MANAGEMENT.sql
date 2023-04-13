-- =============================================
/*
EXEC PRODUCT_MANAGEMENT @JSON_STRING='{"ProductName":"prod1","CategoryId":1,"SubCategoryId":0,"Quantity":10,"Price":100,"OfferPrice":90,"Description":"ddddddddddddddddd","InStock":1}', @ActionType='create'
EXEC PRODUCT_MANAGEMENT @JSON_STRING='{"CategoryName":"Vegetables","ParentId":"0"}', @ActionType='update'
EXEC PRODUCT_MANAGEMENT @JSON_STRING=null, @ActionType='list'
EXEC PRODUCT_MANAGEMENT @JSON_STRING='{"Id":"1"}', @ActionType='listbyid'
EXEC PRODUCT_MANAGEMENT @JSON_STRING='{"Id":1003}', @ActionType='remove'
*/
-- =============================================
CREATE PROCEDURE [dbo].[PRODUCT_MANAGEMENT]
	--  PARAMETERS FOR STORED PROCEDURE
	@JSON_STRING NVARCHAR(MAX) = NULL
	,@ActionType VARCHAR(20)
AS
--  DECLARE GLOBAL VARIABLES 
DECLARE @Id INT
	,@ProductName VARCHAR(250)
	,@CategoryId INT
	,@SubCategoryId INT
	,@Quantity INT
	,@Price DECIMAL(18, 2)
	,@OfferPrice DECIMAL(18, 2)
	,@Description VARCHAR(max)
	,@InStock BIT;
--  RESPONSE DECLARATIONS 
DECLARE @ResponseNumber INT = 0
	,@ResponseMessage VARCHAR(250)
	,@ResponseData VARCHAR(MAX)
	,@ErrorObjectName VARCHAR(50)
	,@ERROR_LINE BIGINT

BEGIN
	-- GET VALUES FROM @JSON_STRING    
	SET @Id = JSON_VALUE(@JSON_STRING, '$.Id')
	SET @ProductName = JSON_VALUE(@JSON_STRING, '$.ProductName')
	SET @CategoryId = JSON_VALUE(@JSON_STRING, '$.CategoryId')
	SET @SubCategoryId = JSON_VALUE(@JSON_STRING, '$.SubCategoryId')
	SET @Quantity = JSON_VALUE(@JSON_STRING, '$.Quantity')
	SET @Price = JSON_VALUE(@JSON_STRING, '$.Price')
	SET @OfferPrice = JSON_VALUE(@JSON_STRING, '$.OfferPrice')
	SET @Description = JSON_VALUE(@JSON_STRING, '$.Description')
	SET @InStock = JSON_VALUE(@JSON_STRING, '$.InStock')
	SET NOCOUNT ON;

	--Create SECTION =============================================
	IF @ActionType = 'create'
	BEGIN
		BEGIN TRY
			-- CREATE PRODUCT
			INSERT INTO Product (
				ProductName
				,CategoryId
				,SubCategoryId
				,Quantity
				,Price
				,OfferPrice
				,Description
				,InStock
				,CreatedOn
				)
			VALUES (
				@ProductName
				,@CategoryId
				,@SubCategoryId
				,@Quantity
				,@Price
				,@OfferPrice
				,@Description
				,@InStock
				,GETDATE()
				)

			SET @ResponseNumber = 1
			SET @ResponseMessage = 'Product successfully saved'
			SET @ResponseData = (
						SELECT Id
							,ProductName
							,CategoryId
							,SubCategoryId
							,Quantity
							,Price
							,OfferPrice
							,Description
							,InStock
						FROM Product
						WHERE Id = SCOPE_IDENTITY()
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

	--Update SECTION =============================================
	IF @ActionType = 'update'
	BEGIN
		BEGIN TRY
			IF NOT EXISTS (
					SELECT 1
					FROM Product
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'Product not found'
				SET @ResponseData = NULL
			END
			ELSE
			BEGIN
				-- UPDATE PRODUCT
				UPDATE [dbo].[Product]
				SET [ProductName] = COALESCE(@ProductName, ProductName)
					,[CategoryId] = COALESCE(@CategoryId, CategoryId)
					,[SubCategoryId] = COALESCE(@SubCategoryId, SubCategoryId)
					,[Quantity] = COALESCE(@Quantity, Quantity)
					,[Price] = COALESCE(@Price, Price)
					,[OfferPrice] = COALESCE(@OfferPrice, OfferPrice)
					,[Description] = COALESCE(@Description, Description)
					,[InStock] = COALESCE(@InStock, InStock)
				WHERE Id = @Id

				SET @ResponseNumber = 1
				SET @ResponseMessage = 'Product successfully updated'
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
			-- GET Product
			SET @ResponseNumber = 1
			SET @ResponseMessage = CONVERT(VARCHAR(200), (
						SELECT COUNT(Id)
						FROM Product
						)) + ' Product data successfully fetched'
			SET @ResponseData = (
					SELECT Id
						,ProductName
						,CategoryId
						,SubCategoryId
						,Quantity
						,Price
						,OfferPrice
						,Description
						,InStock
					FROM Product
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
					FROM Product
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'Product not found'
				SET @ResponseData = NULL
			END
			ELSE
			BEGIN
				-- GET Product
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'Product data successfully fetched'
				SET @ResponseData = (
						SELECT Id
							,ProductName
							,CategoryId
							,SubCategoryId
							,Quantity
							,Price
							,OfferPrice
							,Description
							,InStock
						FROM Product
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
					FROM Product
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'Product not found'
				SET @ResponseData = NULL
			END
			ELSE
			BEGIN
				-- Delete Product
				DELETE
				FROM Product
				WHERE Id = @Id

				SET @Id = @Id;
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'Product Removed successfully'
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