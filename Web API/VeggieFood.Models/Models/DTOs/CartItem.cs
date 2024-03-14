using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeggieFood.Models.Models.DTOs
{
    public class CartItem
    {
        public string Id { get; set; }
        public string CartId { get; set; }
        public string ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
