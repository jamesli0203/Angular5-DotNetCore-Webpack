using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularWebpackVisualStudio.Repositories.Users;
using AngularWebpackVisualStudio.Models;

namespace AngularWebpackVisualStudio.Controllers
{
   
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUsersRepository _usersRepository;
        public UsersController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        // GET: api/Users
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_usersRepository.GetAll());
        }
        [HttpPost]
        public IActionResult Add([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User newUser = _usersRepository.Add(user);

            return CreatedAtRoute("GetSingleUser", new { id = newUser.Id }, newUser);
        }
        [HttpGet]
        [Route("{id:int}", Name = "GetSingleUser")]
        public IActionResult Single(int id)
        {
            User thing = _usersRepository.GetSingle(id);

            if (thing == null)
            {
                return NotFound();
            }

            return Ok(thing);
        }
    }
}
