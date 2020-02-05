using Microsoft.EntityFrameworkCore;

namespace ShoppingApi.Models
{
    public class ShoppingContext : DbContext
    {
        public ShoppingContext(DbContextOptions<ShoppingContext> options) : base(options)
        {
        }

        public DbSet<ShoppingItem> ShoppingItems { get; set; }
    }
}
