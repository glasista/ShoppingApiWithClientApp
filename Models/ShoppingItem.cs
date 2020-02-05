namespace ShoppingApi.Models
{
    public class ShoppingItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public bool IsTaken { get; set; }
    }
}
