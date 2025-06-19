using Microsoft.AspNetCore.Mvc;
using Dapper;
using RoleApi.Data;
using RoleApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace RoleApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DapperContext _context;

        public UserController(DapperContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var query = "SELECT * FROM Users";
            using var connection = _context.CreateConnection();
            var users = await connection.QueryAsync<User>(query);
            return Ok(users);
        }

        [Authorize(Roles = "SuperAdmin")]
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User newUser)

        {
            var query = @"INSERT INTO Users (Username, Password, Role, Department)
                          VALUES (@Username, @Password, @Role, @Department)";

            using var connection = _context.CreateConnection();
            var result = await connection.ExecuteAsync(query, newUser);

            if (result > 0)
                return Ok(newUser);

            return BadRequest("Could not create user");
        }
    }
}
