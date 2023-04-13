using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NuGet.Protocol;
using VeggieFood.Models.Models.DTOs;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository;
using VeggieFood.Repository.Repository.Interfaces;
using VeggiFoodAPI.Helpers;
using VeggiFoodAPI.Models.DTOs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VeggiFoodAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly Microsoft.AspNetCore.Hosting.IHostingEnvironment _hostingEnvironment;
        private readonly IMapper _mappper;
        CustomResponse _customResponse = new CustomResponse();

        public ProductController(IProductRepository productRepository, Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment
            ,IMapper mappper)
        {
            _productRepository = productRepository;
            _hostingEnvironment = hostingEnvironment;
            _mappper = mappper;
        }

        // GET: api/<ProductController>
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var response = await _productRepository.GetAll();
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(response.ResponseData);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var response = await _productRepository.Get(new Product { Id = id });
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetResponseModel(null, response.ResponseData));
        }
                
        [HttpPost]
        public async Task<ActionResult> Create(ProductViewModel model)
        {
            if (ModelState.IsValid)
            {
                ///save products
                var product = _mappper.Map<Product>(model);

                var productResponse = await _productRepository.Add(product);

                //if (model.Files != null && model.Files.Count > 0)
                //{
                //    foreach (IFormFile image in model.Files)
                //    {
                //        string uniqueFileName = string.Empty;
                //        string uploadsFolder = Path.Combine(_hostingEnvironment.WebRootPath, "images/products");
                //        // To make sure the file name is unique we are appending a new
                //        // GUID value and and an underscore to the file name
                //        uniqueFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
                //        string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                //        // Use CopyTo() method provided by IFormFile interface to
                //        // copy the file to wwwroot/images folder
                //        image.CopyTo(new FileStream(filePath, FileMode.Create));
                //        Images productImage = new Images();
                //        productImage.ProductId = lastProductId;
                //        productImage.ImageName = uniqueFileName;

                //        // Load image.
                //        Image img = Image.FromStream(image.OpenReadStream(), true, true);

                //        // Compute thumbnail size.
                //        Size thumbnailSize = GetThumbnailSize(img);

                //        // Get thumbnail.
                //        Image thumbnail = img.GetThumbnailImage(thumbnailSize.Width,
                //            thumbnailSize.Height, null, IntPtr.Zero);

                //        string uploadsFolder2 = Path.Combine(_hostingEnvironment.WebRootPath, "Thumbnails");
                //        string filePath2 = Path.Combine(uploadsFolder2, uniqueFileName);

                //        // Save thumbnail.
                //        thumbnail.Save(filePath2);
                //        _Prodimg_repository.Insert(productImage);
                //    }
                //}
                //var response = await _productRepository.Add(product);
                //if (response.ResponseNumber != 1)
                //{
                //    return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
                //}
                //return Ok(_customResponse.GetResponseModel(null, response.ResponseMessage));
            }
            return BadRequest(_customResponse.GetResponseModel(ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)), null));            
        }
                
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(Product product)
        {
            var response = await _productRepository.Update(product);
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetResponseModel(null, response.ResponseMessage));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var response = await _productRepository.Remove(new Product { Id = id });
            if (response.ResponseNumber != 1)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, _customResponse.GetResponseModel(new string[] { response.ResponseMessage }, null));
            }
            return Ok(_customResponse.GetResponseModel(null, response.ResponseMessage));
        }
    }
}
