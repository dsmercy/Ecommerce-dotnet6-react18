using Microsoft.AspNetCore.Mvc;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VeggiFoodAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var response = await _categoryRepository.GetAll(null);
            if (response.ResponseNumber != 1)
            {
                return Ok(response.ResponseMessage);
            }
            return Ok(response.ResponseData);
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
                
        [HttpPost]
        public async Task<ActionResult> Create(CategoryModel category)
        {
            var response = await _categoryRepository.Add(category);
            return Ok(response.ResponseMessage);
        }
                
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
                
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
