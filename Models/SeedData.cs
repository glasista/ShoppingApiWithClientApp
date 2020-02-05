using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingApi.Models
{
    public class SeedData
    {
        public static void EnsurePopulated(IServiceProvider serviceProvider)
        {
            using (ShoppingContext context = serviceProvider.GetRequiredService<ShoppingContext>())
            {
                if (!context.ShoppingItems.Any())
                {
                    context.ShoppingItems.AddRange(
                        new ShoppingItem
                        {
                            Name = "Chleb",
                            Details = "Niekrojony, 2 szt",
                            IsTaken = true
                        },
                        new ShoppingItem
                        {
                            Name = "Kawa XYZ",
                            Details = "Parzona 25dag",
                            IsTaken = false
                        },
                        new ShoppingItem
                        {
                            Name = "Ser żółty",
                            Details = "Gouda młody dojrzewający",
                            IsTaken = true
                        },
                        new ShoppingItem
                        {
                            Name = "Sok pomarańczowy",
                            Details = "1l, 100% soku z owoców",
                            IsTaken = true
                        },
                        new ShoppingItem
                        {
                            Name = "Żelki",
                            Details = "różne smaki, także kwaśne, 10 szt.",
                            IsTaken = true
                        }
                        );
                    context.SaveChanges();
                }
            }
        }
    }
}
