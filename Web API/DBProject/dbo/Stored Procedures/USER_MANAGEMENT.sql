-- =============================================
/*
EXEC USER_MANAGEMENT @JSON_STRING='{"UserName":"Lanre","Email":"lanre@domain.com","PhoneNumber": "2348099889980"}', @ActionType='create'
EXEC USER_MANAGEMENT @JSON_STRING='{"Id":1,"UserName":"Lanre2","Email":"lanre@domain2.com","PhoneNumber": "23480998899802"}', @ActionType='update'
EXEC USER_MANAGEMENT @JSON_STRING=null, @ActionType='list'
EXEC USER_MANAGEMENT @JSON_STRING='{"Id":"8"}', @ActionType='listbyid'
EXEC USER_MANAGEMENT @JSON_STRING='{"Id":1003}', @ActionType='remove'
*/
-- =============================================
CREATE PROCEDURE [dbo].[USER_MANAGEMENT]
	--  PARAMETERS FOR STORED PROCEDURE
	@JSON_STRING NVARCHAR(MAX) = NULL
	,@ActionType VARCHAR(20)
AS
--  DECLARE GLOBAL VARIABLES 
DECLARE @Id INT
	,@UserName VARCHAR(50)
	,@Email VARCHAR(200)
	,@EmailConfirmed BIT
	,@PhoneNumber VARCHAR(200)
	,@PhoneNumberConfirmed BIT
	,@DisplayPicture VARCHAR(max);
--  RESPONSE DECLARATIONS 
DECLARE @ResponseNumber INT = 0
	,@ResponseMessage VARCHAR(250)
	,@ResponseData VARCHAR(MAX)
	,@ErrorObjectName VARCHAR(50)
	,@ERROR_LINE BIGINT

BEGIN
	-- GET VALUES FROM @USER_JSON_STRING    
	SET @Id = JSON_VALUE(@JSON_STRING, '$.Id')
	SET @UserName = JSON_VALUE(@JSON_STRING, '$.UserName')
	SET @Email = JSON_VALUE(@JSON_STRING, '$.Email')
	SET @EmailConfirmed = JSON_VALUE(@JSON_STRING, '$.EmailConfirmed')
	SET @PhoneNumber = JSON_VALUE(@JSON_STRING, '$.PhoneNumber')
	SET @PhoneNumberConfirmed = JSON_VALUE(@JSON_STRING, '$.PhoneNumberConfirmed')
	SET @DisplayPicture = JSON_VALUE(@JSON_STRING, '$.DisplayPicture')
	SET NOCOUNT ON;

	--Create SECTION =============================================
	IF @ActionType = 'create'
	BEGIN
		BEGIN TRY
			-- CREATE USER
			INSERT INTO USERS (
				UserName
				,Email
				,EmailConfirmed
				,PhoneNumber
				,PhoneNumberConfirmed
				,DisplayPicture
				,CreatedOn
				)
			VALUES (
				@UserName
				,@Email
				,@EmailConfirmed
				,@PhoneNumber
				,@PhoneNumberConfirmed
				,@DisplayPicture
				,GETDATE()
				)

			SET @Id = SCOPE_IDENTITY();
			SET @ResponseNumber = 1
			SET @ResponseMessage = 'User successfully saved'
			SET @ResponseData = null
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
					FROM Users
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'User not found'
				SET @ResponseData = null
			END
			ELSE
			BEGIN
				-- UPDATE USER
				UPDATE [dbo].[Users]
				SET [UserName] = COALESCE(@UserName, UserName)
					,[Email] = COALESCE(@Email, Email)
					,[EmailConfirmed] = COALESCE(@EmailConfirmed, EmailConfirmed)
					,[PhoneNumber] = COALESCE(@PhoneNumber, PhoneNumber)
					,[PhoneNumberConfirmed] = COALESCE(@PhoneNumberConfirmed, PhoneNumberConfirmed)
					,[DisplayPicture] = COALESCE(@DisplayPicture, DisplayPicture)
					,UpdatedOn = GETDATE()
				WHERE Id = @Id
				
				SET @Id = @Id;
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'User successfully updated'
				SET @ResponseData = null
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
			-- GET USERS
			SET @ResponseNumber = 1
			SET @ResponseMessage = CONVERT(VARCHAR(200),(select COUNT(Id) from Users))+' Users data successfully fetched'
			SET @ResponseData = (
					SELECT [Id]
      ,[UserName]
      ,[Email]
      ,[EmailConfirmed]
      ,[PhoneNumber]
      ,[PhoneNumberConfirmed]
      ,[DisplayPicture]
      ,[CreatedOn]
      ,[UpdatedOn]
					FROM USERS
					FOR JSON PATH
						,WITHOUT_ARRAY_WRAPPER
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
					FROM Users
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'User not found'
				SET @ResponseData = null
			END
			ELSE
			BEGIN
				-- GET USERS
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'User data successfully fetched'
				SET @ResponseData = (
						SELECT [Id]
      ,[UserName]
      ,[Email]
      ,[EmailConfirmed]
      ,[PhoneNumber]
      ,[PhoneNumberConfirmed]
      ,[DisplayPicture]
      ,[CreatedOn]
      ,[UpdatedOn]
						FROM USERS
						WHERE Id = @Id
						FOR JSON PATH
							,WITHOUT_ARRAY_WRAPPER
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
					FROM Users
					WHERE Id = @Id
					)
			BEGIN
				SET @ResponseNumber = - 1
				SET @ResponseMessage = 'User not found'
				SET @ResponseData = null
			END
			ELSE
			BEGIN
				-- Delete USERS
				DELETE
				FROM Users
				WHERE Id = @Id

				SET @Id = @Id;
				SET @ResponseNumber = 1
				SET @ResponseMessage = 'User Removed successfully'
				SET @ResponseData = null
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