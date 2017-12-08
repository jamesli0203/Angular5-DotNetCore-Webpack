using AngularWebpackVisualStudio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWebpackVisualStudio.Repositories.Users
{
    public interface IUsersRepository
    {

        User GetSingle(int id);
        User Add(User item);
        void Delete(int id);
        User Update(int id, User item);
        ICollection<User> GetAll();
        int Count();
        
    }
}
