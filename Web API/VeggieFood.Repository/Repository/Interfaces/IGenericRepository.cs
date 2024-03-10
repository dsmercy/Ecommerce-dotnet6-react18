using VeggieFood.Models.Models.ViewModels;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository.Interfaces
{
    public interface IGenericRepository<TEntity>
    {
        Task<ResponseDapper> Add(TEntity entity,string tableName,string storedProc = "");
        Task<ResponseDapper> Update(TEntity entity, string tableName,string storedProc = "");
        Task<ResponseDapper> Get(TEntity entity, string tableName,string storedProc = "");
        Task<ResponseDapper> GetAll(string tableName,string storedProc = "");
        Task<ResponseDapper> Remove(TEntity entity, string tableName,string storedProc = "");
        Task<ResponseDapper> AddBulk(List<TEntity> entities, string tableName,string storedProc = "");
    }
}
