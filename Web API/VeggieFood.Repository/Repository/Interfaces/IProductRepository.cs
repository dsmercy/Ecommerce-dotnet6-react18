using VeggieFood.Models.Models.ViewModels;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository.Interfaces
{
    public interface IProductRepository
    {
        Task<ResponseDapper> Add(Product product);
        Task<ResponseDapper> Update(Product product);
        Task<ResponseDapper> Get(Product product);
        Task<ResponseDapper> GetAll();
        Task<ResponseDapper> Remove(Product product);
    }
}
