using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeggieFood.Models
{
    public static class ConstantVariables
    {
        public static class ImageConstants
        {
            public static string PRODUCTIMAGE = "PRODUCTIMAGE";
            public static string PRODUCTTHUMBNAIL = "PRODUCTTHUMBNAIL";
        }
        public static class Tables
        {
            public static string PRODUCT = "PRODUCT";
            public static string IMAGE = "IMAGES";
            public static string CATEGORY = "CATEGORY";
        }
        public static class StoredProcedures
        {
            public static string GENERIC_CRUD = "GENERIC_CRUD";
            public static string PRODUCT_MANAGEMENT = "PRODUCT_MANAGEMENT";
        }
    }
}
