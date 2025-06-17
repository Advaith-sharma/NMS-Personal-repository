using System.Data;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace RoleApi.Data
{
    public class DapperContext
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public DapperContext(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("Connection string not found");
        }

        public IDbConnection CreateConnection()
            => new NpgsqlConnection(_connectionString);
    }
}
