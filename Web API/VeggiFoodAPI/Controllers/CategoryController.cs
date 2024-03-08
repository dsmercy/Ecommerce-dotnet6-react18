using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using VeggieFood.Models;
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
        private readonly IMapper _mappper;
        private readonly IGenericRepository<Category> _genericRepository;
        CustomResponse _customResponse = new CustomResponse();

        public CategoryController(IMapper mappper, IGenericRepository<Category> genericRepository)
        {
            _mappper = mappper;
            _genericRepository = genericRepository;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var response = await _genericRepository.GetAll(ConstantVariables.Tables.CATEGORY);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetGenericResponse<List<Category>>(null, response));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(string id)
        {
            var response = await _genericRepository.Get(new Category { Id = id }, ConstantVariables.Tables.CATEGORY);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetGenericResponse<List<Category>>(null, response));
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] CategoryModel model)
        {
            if (ModelState.IsValid)
            {
                var category = _mappper.Map<Category>(model);
                category.Id = Guid.NewGuid().ToString();
                if (string.IsNullOrEmpty(category.ParentId)) { category.ParentId = "ParentCategory"; }
                var response = await _genericRepository.Add(category, ConstantVariables.Tables.CATEGORY);
                if (response.ResponseNumber != 1)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
                }
                return Ok(_customResponse.GetGenericResponse<List<Category>>(null, response));
            }
            return BadRequest(_customResponse.GetResponseModel(ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)), null));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update([FromBody] Category category)
        {
            var response = await _genericRepository.Update(category, ConstantVariables.Tables.CATEGORY);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetGenericResponse<List<Category>>(null, response));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var response = await _genericRepository.Remove(new Category { Id = id }, ConstantVariables.Tables.CATEGORY);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetGenericResponse<List<Category>>(null, response));
        }
    }
}
