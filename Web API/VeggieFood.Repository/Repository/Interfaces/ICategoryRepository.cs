using VeggieFood.Models.Models.ViewModels;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository.Interfaces
{
    public interface ICategoryRepository
    {
        Task<ResponseDapper> Add(CategoryModel category);
        Task<ResponseDapper> Update(Category category);
        Task<ResponseDapper> Get(Category category);
        Task<ResponseDapper> GetAll();
        Task<ResponseDapper> Remove(Category category);
    }
}
