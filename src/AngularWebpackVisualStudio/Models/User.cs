using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWebpackVisualStudio.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Emailaddress { get; set; }
        public string Activity { get; set; }
        public string Comments { get; set; }
    }
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
                : base(options)
        {
        }
        public DbSet<User> Users { get; set; }    
    }
}
