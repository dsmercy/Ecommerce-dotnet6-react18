using Dapper;
using Newtonsoft.Json;
using VeggieFood.Models.Models.DTOs;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;
using VeggieFood.REPOSITORY.Repository;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;
using static Dapper.SqlMapper;

namespace VeggieFood.Repository.Repository
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity>
    {
        private readonly IDapperGenericRepository _dapperRepository;

        public GenericRepository(IDapperGenericRepository genericRepository)
        {
            _dapperRepository = genericRepository;
        }
        public async Task<ResponseDapper> Add(TEntity entity, string tableName)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@Table", tableName);
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(entity));
                ObjParm.Add("@ActionType", "create");
                return await _dapperRepository.AddWithDynamicParam<ResponseDapper>("GENERIC_CRUD", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Task<ResponseDapper> AddBulk(List<TEntity> entities, string tableName)
        {
            throw new NotImplementedException();
            //try
            //{
            //    return await _genericRepository.AddMultiple<ImageViewModel>("@insert into Images (ImageType,ImagePath,ProductId)values (@ImageType,@ImagePath,@ProductId)", images);
            //}
            //catch (Exception)
            //{
            //    throw;
            //}
        }

        public async Task<ResponseDapper> Get(TEntity entity, string tableName)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@Table", tableName);
                ObjParm.Add("@JSON_STRING", entity != null ? JsonConvert.SerializeObject(entity) : null);
                ObjParm.Add("@ActionType", "listbyid");
                return await _dapperRepository.Get<ResponseDapper>("GENERIC_CRUD", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> GetAll(string tableName)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@Table", tableName);
                ObjParm.Add("@JSON_STRING", null);
                ObjParm.Add("@ActionType", "list");
                return await _dapperRepository.GetEntities<ResponseDapper>("GENERIC_CRUD", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Remove(TEntity entity, string tableName)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@Table", tableName);
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(entity));
                ObjParm.Add("@ActionType", "remove");
                return await _dapperRepository.AddWithDynamicParam<ResponseDapper>("GENERIC_CRUD", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Update(TEntity entity, string tableName)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@Table", tableName);
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(entity));
                ObjParm.Add("@ActionType", "update");
                return await _dapperRepository.AddWithDynamicParam<ResponseDapper>("GENERIC_CRUD", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
