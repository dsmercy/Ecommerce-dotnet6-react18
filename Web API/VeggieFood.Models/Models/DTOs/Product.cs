﻿namespace VeggiFoodAPI.Models.DTOs
{
    public class Product
    {
        public int Id { get; set; }

        public string ProductName { get; set; }

        public int CategoryId { get; set; }

        public int? SubCategoryId { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }

        public decimal OfferPrice { get; set; }

        public string Description { get; set; }

        public bool InStock { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }
    }
}
