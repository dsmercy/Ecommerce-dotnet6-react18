using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VeggiFoodAPI.Models;

namespace VeggieFood.REPOSITORY.Repository
{
    public interface IGenericRepository
    {
        //IDbConnection Connection { get; }
        Task<T> Add<T>(string query, T parameters);
        Task<T> AddWithDynamicParam<T>(string query, DynamicParameters parameters);
        Task<int> AddMultiple<T>(string query, List<T> parameters);
        Task<T> Delete<T>(string query, object parameters);
        Task<T> Get<T>(string query, object parameters);
        Task<T> GetEntities<T>(string query, object parameters);
        Tuple<IEnumerable<T1>, IEnumerable<T2>> GetMultipleResultSets<T1, T2>(string sQuery, object parameters);
    }
}
