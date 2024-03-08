using VeggieFood.Models.Models.ViewModels;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository.Interfaces
{
    public interface IGenericRepository<TEntity>
    {
        Task<ResponseDapper> Add(TEntity entity,string tableName);
        Task<ResponseDapper> Update(TEntity entity, string tableName);
        Task<ResponseDapper> Get(TEntity entity, string tableName);
        Task<ResponseDapper> GetAll(string tableName);
        Task<ResponseDapper> Remove(TEntity entity, string tableName);
        Task<ResponseDapper> AddBulk(List<TEntity> entities, string tableName);
    }
}
