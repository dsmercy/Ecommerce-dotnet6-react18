﻿using Dapper;
using Newtonsoft.Json;
using VeggieFood.Models.Models.ViewModels;
using VeggieFood.Repository.Repository.Interfaces;
using VeggieFood.REPOSITORY.Repository;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

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

        public async Task<ResponseDapper> Get(Category category)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", category != null ? JsonConvert.SerializeObject(category) : null);
                ObjParm.Add("@ActionType", "listbyid");
                return await _genericRepository.Get<ResponseDapper>("CATEGORY_MANAGEMENT", ObjParm);
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
                return await _genericRepository.GetEntities<ResponseDapper>("CATEGORY_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Remove(Category category)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(category));
                ObjParm.Add("@ActionType", "remove");
                return await _genericRepository.AddWithDynamicParam<ResponseDapper>("CATEGORY_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDapper> Update(Category category)
        {
            try
            {
                DynamicParameters ObjParm = new DynamicParameters();
                ObjParm.Add("@JSON_STRING", JsonConvert.SerializeObject(category));
                ObjParm.Add("@ActionType", "update");
                return await _genericRepository.AddWithDynamicParam<ResponseDapper>("CATEGORY_MANAGEMENT", ObjParm);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
