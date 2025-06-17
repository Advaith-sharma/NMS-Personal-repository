using Dapper;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using RoleApi.Models;
using System.Text;
using RoleApi.Data;

namespace RoleApi.Services;

public class AuthService
{
    private readonly DapperContext _context;
    private readonly IConfiguration _config;

    public AuthService(DapperContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    public async Task<User?> ValidateUser(string username, string password)
    {
        var query = "SELECT * FROM Users WHERE Username = @Username AND Password = @Password";
        using var conn = _context.CreateConnection();
        return await conn.QueryFirstOrDefaultAsync<User>(query, new { username, password });
    }

    public string GenerateToken(User user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            claims: claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
