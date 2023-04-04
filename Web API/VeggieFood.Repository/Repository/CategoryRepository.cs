using Dapper;
using Newtonsoft.Json;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;
using VeggieFood.REPOSITORY.Repository;
using VeggiFoodAPI.Models;

namespace VeggieFood.Repository.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly IGenericRepository _genericRepository;

        public CategoryRepository(IGenericRepository genericRepository)
        {
            _genericRepository = genericRepository;
        }
        public async Task<ResponseDapper> Add(CategoryModel category)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(category));
                ObjParm.Add("@ActionType", "create");
                return await _genericRepository.AddWithDynamicParam<ResponseDapper>("CATEGORY_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Get(CategoryModel category)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", category != null ? JsonConvert.SerializeObject(category) : null);
                ObjParm.Add("@ActionType", "listbyid");
                return await _genericRepository.AddWithDynamicParam<ResponseDapper>("CATEGORY_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> GetAll(CategoryModel? category)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", category != null ? JsonConvert.SerializeObject(category) : null);
                ObjParm.Add("@ActionType", "list");
                return await _genericRepository.GetEntities<ResponseDapper>("CATEGORY_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Remove(CategoryModel category)
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseDapper> Update(CategoryModel category)
        {
            throw new NotImplementedException();
        }
    }
}
