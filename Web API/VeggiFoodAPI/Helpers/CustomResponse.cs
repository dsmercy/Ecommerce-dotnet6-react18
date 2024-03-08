using Newtonsoft.Json;
using VeggiFoodAPI.Models;

namespace VeggiFoodAPI.Helpers
{
    public class CustomResponse
    {
        public ResponseModel GetResponseModel(IEnumerable<string>? errors,Object? data)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.Errors = new List<string>();

            if(errors!=null) responseModel.Errors.AddRange(errors);
            responseModel.Response = data;
            return responseModel;
        }

        public ResponseModel GetGenericResponse<T>(IEnumerable<string>? errors, ResponseDapper? responseDapper)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.Errors = new List<string>();

            if (errors != null) responseModel.Errors.AddRange(errors);
            responseModel.Response = responseDapper.ResponseData != null ? JsonConvert.DeserializeObject<T>(responseDapper.ResponseData) : new List<string>();
            responseModel.Message = responseDapper.ResponseMessage;
            return responseModel;
        }
    }
}
