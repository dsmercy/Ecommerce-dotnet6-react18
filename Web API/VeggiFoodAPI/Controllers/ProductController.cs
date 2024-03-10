using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using VeggieFood.Models;
using VeggieFood.Models.Models.DTOs;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;
using VeggiFoodAPI.Helpers;
using VeggiFoodAPI.Models.DTOs;
using VeggiFoodAPI.Services;


namespace VeggiFoodAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IGenericRepository<Product> _genericProductRepository;
        private readonly IMapper _mappper;
        private readonly IGenericRepository<Images> _genericImageRepository;
        private readonly ImageService _imageService;
        CustomResponse _customResponse = new CustomResponse();

        public ProductController(IGenericRepository<Product> genericProductRepository, IMapper mappper, IGenericRepository<Images> genericImageRepository, ImageService imageService)
        {
            _genericProductRepository = genericProductRepository;
            _mappper = mappper;
            _genericImageRepository = genericImageRepository;
            _imageService = imageService;
        }

        // GET: api/<ProductController>
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var productsResponse = await _genericProductRepository.GetAll("", ConstantVariables.StoredProcedures.PRODUCT_MANAGEMENT);
            if (productsResponse.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { productsResponse.ResponseMessage }, null));
            }

            return Ok(_customResponse.GetGenericResponse<List<Product>>(null, productsResponse));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(string id)
        {
            var response = await _genericProductRepository.Get(new Product { Id = id }, ConstantVariables.Tables.PRODUCT);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetGenericResponse<List<Product>>(null, response));
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromForm] ProductViewModel model)
        {
            if (ModelState.IsValid)
            {
                ///save products
                var product = _mappper.Map<Product>(model);

                product.Id = Guid.NewGuid().ToString();
                product.CreatedOn = DateTime.Now.ToString();

                if (model.Files != null && model.Files.Count > 0)
                {
                    foreach (IFormFile image in model.Files)
                    {
                        await SaveImage(product, image);
                    }
                }
                var response = await _genericProductRepository.Add(product, ConstantVariables.Tables.PRODUCT);
                if (response.ResponseNumber != 1)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
                }
                return Ok(_customResponse.GetGenericResponse<List<Product>>(null, response));
            }
            return BadRequest(_customResponse.GetResponseModel(ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)), null));
        }

        private async Task SaveImage(Product product, IFormFile image)
        {
            Images productImage = new Images();

            var imageResult = await _imageService.AddImageAsync(image, "products");
            productImage.ProductId = product.Id;
            productImage.ImageType = ConstantVariables.ImageConstants.PRODUCTIMAGE;
            productImage.ImagePath = imageResult.SecureUrl.ToString();
            productImage.Id = imageResult.PublicId;

            await _genericImageRepository.Add(productImage, ConstantVariables.Tables.IMAGE);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(Product product)
        {
            var response = await _genericProductRepository.Update(product, ConstantVariables.Tables.PRODUCT);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetGenericResponse<List<Product>>(null, response));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var response = await _genericProductRepository.Remove(new Product { Id = id }, ConstantVariables.Tables.PRODUCT);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetGenericResponse<List<Product>>(null, response));
        }
    }
}
