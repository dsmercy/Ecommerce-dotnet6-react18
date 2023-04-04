using Microsoft.AspNetCore.Identity;

namespace VeggiFoodAPI.Models.DTOs
{

    public class ApplicationUser: IdentityUser<int>
    {
        //public UserAddress Address { get; set; }
        public string? DisplayPicture { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
    }
}
