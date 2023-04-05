using VeggieFood.Models.Models.ViewModels;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository.Interfaces
{
    public interface IProductRepository
    {
        Task<ResponseDapper> Add(ProductViewModel product);
        Task<ResponseDapper> Update(ProductViewModel product);
        Task<ResponseDapper> Get(Product product);
        Task<ResponseDapper> GetAll();
        Task<ResponseDapper> Remove(ProductViewModel product);
    }
}
