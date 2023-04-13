using VeggieFood.Models.Models.DTOs;
using VeggieFood.Models.Models.ViewModels;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;

namespace VeggieFood.Repository.Repository.Interfaces
{
    public interface IImageRepository
    {
        Task<ResponseDapper> Add(ImageViewModel image);
        Task<ResponseDapper> AddBulk(List<ImageViewModel> images);
        Task<ResponseDapper> Remove(Images image);
    }
}
