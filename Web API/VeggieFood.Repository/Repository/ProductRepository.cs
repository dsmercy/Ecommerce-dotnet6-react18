using Dapper;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;
using VeggieFood.REPOSITORY.Repository;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly IGenericRepository _genericRepository;

        public ProductRepository(IGenericRepository genericRepository)
        {
            _genericRepository = genericRepository;
        }
        public async Task<ResponseDapper> Add(Product product)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(product));
                ObjParm.Add("@ActionType", "create");
                return await _genericRepository.AddWithDynamicParam<ResponseDapper>("PRODUCT_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Get(Product product)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", product != null ? JsonConvert.SerializeObject(product) : null);
                ObjParm.Add("@ActionType", "listbyid");
                return await _genericRepository.Get<ResponseDapper>("PRODUCT_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> GetAll()
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", null);
                ObjParm.Add("@ActionType", "list");
                return await _genericRepository.GetEntities<ResponseDapper>("PRODUCT_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Remove(Product product)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(product));
                ObjParm.Add("@ActionType", "remove");
                return await _genericRepository.AddWithDynamicParam<ResponseDapper>("PRODUCT_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Update(Product product)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(product));
                ObjParm.Add("@ActionType", "update");
                return await _genericRepository.AddWithDynamicParam<ResponseDapper>("PRODUCT_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
