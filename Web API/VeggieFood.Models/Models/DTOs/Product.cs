using VeggieFood.Models.Models.DTOs;

namespace VeggiFoodAPI.Models.DTOs
{
#nullable disable
    public class Product
    {
        public string Id { get; set; }
        public string ProductName { get; set; }
        public string CategoryId { get; set; }
        public int Quantity { get; set; }
        public string PriceUnit { get; set; }
        public decimal Price { get; set; }
        public decimal OfferPrice { get; set; }
        public string Description { get; set; }
        public bool InStock { get; set; }
        public string CreatedOn { get; set; }
        public List<Images> Images { get; set; }
    }
}
