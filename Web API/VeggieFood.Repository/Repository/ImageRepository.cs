using Dapper;
using Newtonsoft.Json;
using VeggieFood.Models.Models.DTOs;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;
using VeggieFood.REPOSITORY.Repository;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository
{
    public class ImageRepository : IImageRepository
    {
        private readonly IGenericRepository _genericRepository;

        public ImageRepository(IGenericRepository genericRepository)
        {
            _genericRepository = genericRepository;
        }
        public Task<ResponseDapper> Add(ImageViewModel image)
        {
            throw new NotImplementedException();
        }

        public async Task<int> AddBulk(List<ImageViewModel> images)
        {
            try
            {
                return await _genericRepository.AddMultiple<ImageViewModel>("@insert into Images (ImageType,ImagePath,ProductId)values (@ImageType,@ImagePath,@ProductId)", images);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Task<ResponseDapper> Remove(Images image)
        {
            throw new NotImplementedException();
        }
    }
}
