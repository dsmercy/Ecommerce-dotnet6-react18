using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeggieFood.Models.Models.ViewModels
{
    public class ProductViewModel
    {
        [Required]
        public string ProductName { get; set; }
        [Required]
        public string CategoryId { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public decimal OfferPrice { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public List<IFormFile> Files { get; set; }
        [Required]
        public bool InStock { get; set; }
    }
}
