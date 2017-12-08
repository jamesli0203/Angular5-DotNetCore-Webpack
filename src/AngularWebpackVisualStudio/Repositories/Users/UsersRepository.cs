using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularWebpackVisualStudio.Models;
using System.Collections.Concurrent;

namespace AngularWebpackVisualStudio.Repositories.Users
{
    public class UsersRepository : IUsersRepository
    {
        private readonly ConcurrentDictionary<int, User> _storage = new ConcurrentDictionary<int, User>();
        public UsersRepository()
        {
            User seed = new User
            {
                Id = 1,
                Firstname = "james",
            Lastname = "Tom",
            Emailaddress = "test123@test.com",
                Activity = "logging",
                Comments = "asdf asdf asdf"

            };
       
    
            _storage.TryAdd(seed.Id, seed);
            seed = new User
            {
                Id = 2,
                Firstname = "John",
                Lastname = "Thom",
                Emailaddress = "test223@test.com",
                Activity = "loggin",
                Comments = "asdf sdfffgggh "
            };
            _storage.TryAdd(seed.Id, seed);

            _storage.TryAdd(seed.Id, seed);
            seed = new User
            {
                Id = 3,
                Firstname = "John1",
                Lastname = "Thom1",
                Emailaddress = "test22311@test.com",
                Activity = "loggin111",
                Comments = "asdf sdfffgggh 111"
            };
            _storage.TryAdd(seed.Id, seed);
        }
        public User Add(User item)
        {
            item.Id = !GetAll().Any() ? 1 : GetAll().Max(x => x.Id) + 1;

            if (_storage.TryAdd(item.Id, item))
            {
                return item;
            }

            throw new Exception("Item could not be added");
        }

        public int Count()
        {
            return _storage.Count;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public ICollection<User> GetAll()
        {
            return _storage.Values;;
        }

        public User GetSingle(int id)
        {
            User thing;
            return _storage.TryGetValue(id, out thing) ? thing : null;
        }

        public User Update(int id, User item)
        {
            throw new NotImplementedException();
        }
        
    }
}
