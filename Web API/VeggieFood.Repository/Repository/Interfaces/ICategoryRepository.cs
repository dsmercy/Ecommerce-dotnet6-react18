using VeggieFood.Models.Models.ViewModels;
using VeggiFoodAPI.Models;

namespace VeggieFood.Repository.Repository.Interfaces
{
    public interface ICategoryRepository
    {
        Task<ResponseDapper> Add(CategoryModel category);
        Task<ResponseDapper> Update(CategoryModel category);
        Task<ResponseDapper> Get(CategoryModel category);
        Task<ResponseDapper> GetAll(CategoryModel? category);
        Task<ResponseDapper> Remove(CategoryModel category);
    }
}
