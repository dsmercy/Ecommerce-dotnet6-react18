﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VeggieFood.Models.Models.ViewModels
{
    public class CategoryModel
    {
        public string CategoryName { get; set; }
        public string ParentId { get; set; }
    }
}
