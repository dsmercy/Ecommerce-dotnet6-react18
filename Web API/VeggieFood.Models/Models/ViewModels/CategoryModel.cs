using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeggieFood.Models.Models.ViewModels
{
#nullable disable
    public class CategoryModel
    {
        [Required]
        public string CategoryName { get; set; }
        public string ParentId { get; set; }
    }
}
