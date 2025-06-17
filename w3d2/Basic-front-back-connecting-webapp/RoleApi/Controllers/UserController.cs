using Microsoft.AspNetCore.Mvc;
using Dapper;
using RoleApi.Data;
using RoleApi.Models;

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
    }
}
