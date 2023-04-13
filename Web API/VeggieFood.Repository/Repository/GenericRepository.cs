using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VeggiFoodAPI.Models;
using static Dapper.SqlMapper;

namespace VeggieFood.REPOSITORY.Repository
{
    public class GenericRepository : IGenericRepository, IDisposable
    {
        private readonly string connectionString;
        public GenericRepository(IConfiguration configuration)
        {
            this.connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public async Task<T> Add<T>(string query, T parameters)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                return await con.QueryFirstAsync<T>(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public async Task<T> AddWithDynamicParam<T>(string query, DynamicParameters parameters)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                return await con.QueryFirstAsync<T>(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public async Task<T> Delete<T>(string query, object parameters)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                return await con.QueryFirstAsync<T>(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public async Task<T> Get<T>(string query, object parameters)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                return await con.QueryFirstAsync<T>(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public async Task<T> GetEntities<T>(string query, object parameters)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                return await con.QueryFirstAsync<T>(query, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public async Task<int> AddMultiple<T>(string query, List<T> parameters)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                await con.ExecuteAsync(query, parameters);
                return 1;
            }
        }

        public Tuple<IEnumerable<T1>, IEnumerable<T2>> GetMultipleResultSets<T1, T2>(string sQuery, object parameters)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            this.Dispose(true);
        }

        private void Dispose(bool isDisposing)
        {
            if (isDisposing)
            {
                GC.SuppressFinalize(this);
            }
        }

    }
}
