using Microsoft.AspNetCore.Mvc;
using Dapper;
using RoleApi.Data;
using RoleApi.Models;

namespace RoleApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly DapperContext _context;

        public AuthController(DapperContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            Console.WriteLine($"Login attempt for user: {request.Username}");
            
            var query = "SELECT * FROM Users WHERE Username = @Username AND Password = @Password";
            using var connection = _context.CreateConnection();
            var user = await connection.QueryFirstOrDefaultAsync<User>(query, new { request.Username, request.Password });

            if (user == null)
                return Unauthorized("Invalid username or password");

            // For now, return user object (later, return JWT)
            return Ok(user);
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
    }
}
