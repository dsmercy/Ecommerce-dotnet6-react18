using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeggieFood.Models.Models.ViewModels
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int CategoryId { get; set; }
        public int? SubCategoryId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal OfferPrice { get; set; }
        public string Description { get; set; }
        public List<IFormFile> Files { get; set; }
        public bool InStock { get; set; }
    }
}
