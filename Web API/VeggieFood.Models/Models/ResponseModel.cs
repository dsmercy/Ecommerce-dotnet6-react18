namespace VeggiFoodAPI.Models
{
    public class ResponseModel
    {
        public object? Response { get; set; }
        public string? Message { get; set; }
        public List<string>? Errors { get; set; }
    }
}
