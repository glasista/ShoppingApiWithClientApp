namespace ShoppingApi.Models
{
    public class ShoppingItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsTaken { get; set; }
    }
}
