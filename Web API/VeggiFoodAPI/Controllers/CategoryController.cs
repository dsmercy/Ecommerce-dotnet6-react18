using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;
using VeggiFoodAPI.Helpers;
using VeggiFoodAPI.Models.DTOs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VeggiFoodAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        CustomResponse _customResponse = new CustomResponse();

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var response = await _categoryRepository.GetAll();
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(response.ResponseData);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var response = await _categoryRepository.Get(new Category { Id = id });
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetResponseModel(null, response.ResponseData));
        }
                
        [HttpPost]
        public async Task<ActionResult> Create(CategoryModel category)
        {
            var response = await _categoryRepository.Add(category);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetResponseModel(null, response.ResponseMessage));
        }
                
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(Category category)
        {
            var response = await _categoryRepository.Update(category);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetResponseModel(null, response.ResponseMessage));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var response = await _categoryRepository.Remove(new Category { Id = id });
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetResponseModel(null, response.ResponseMessage));
        }
    }
}
