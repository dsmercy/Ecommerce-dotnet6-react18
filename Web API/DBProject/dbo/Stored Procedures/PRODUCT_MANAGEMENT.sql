-- =============================================
/*
EXEC PRODUCT_MANAGEMENT @JSON_STRING='{"ProductName":"prod1","CategoryId":1,"SubCategoryId":0,"Quantity":10,"Price":100,"OfferPrice":90,"Description":"ddddddddddddddddd","InStock":1}', @ActionType='create'
EXEC PRODUCT_MANAGEMENT @JSON_STRING='{"CategoryName":"Vegetables","ParentId":"0"}', @ActionType='update'
EXEC PRODUCT_MANAGEMENT @JSON_STRING=null, @ActionType='list'
EXEC PRODUCT_MANAGEMENT @JSON_STRING='{"Id":"167c12bf-066c-4613-87dd-a630edabc12e"}', @ActionType='listbyid'
*/
-- =============================================
CREATE PROCEDURE [dbo].[PRODUCT_MANAGEMENT]
	--  PARAMETERS FOR STORED PROCEDURE
	@Table NVARCHAR(50)
	,@JSON_STRING NVARCHAR(MAX) = NULL
	,@ActionType VARCHAR(20)
AS
--  DECLARE GLOBAL VARIABLES 
DECLARE @Id VARCHAR(250)=''
--  RESPONSE DECLARATIONS 
DECLARE @ResponseNumber INT = 0
	,@ResponseMessage VARCHAR(250)
	,@ResponseData VARCHAR(MAX)
	,@ErrorObjectName VARCHAR(50)
	,@ERROR_LINE BIGINT

BEGIN
	-- GET VALUES FROM @JSON_STRING    
	SET @Id = JSON_VALUE(@JSON_STRING, '$.Id')
	SET NOCOUNT ON;

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
					SELECT p.Id
						,p.ProductName
						,p.CategoryId
						,p.Quantity
						,p.Price
						,p.OfferPrice
						,p.Description
						,p.InStock
						,p.CreatedOn
						,(
							SELECT Id
								,ImagePath
								,ImageType
								,ProductId
							FROM Images i
							WHERE i.ProductId = p.Id
							FOR JSON AUTO
							) AS Images
					FROM Product p
					FOR JSON AUTO
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