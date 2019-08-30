using MVCWebApiApplication.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MVCWebApiApplication.Business
{
   public interface IDetails
    {
        Task<List<Employee>> GetEmployee(string apiUrl);
    }
}
