using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using MVCWebApiApplication.Models;
using Newtonsoft.Json;

namespace MVCWebApiApplication.Business
{
    public class EmployeeDetails : IDetails
    {
        public async Task<List<Employee>> GetEmployee(string apiUrl)
        {
            var empList = new List<Employee>();
            using (var client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync(apiUrl).ConfigureAwait(false);
                if (response.IsSuccessStatusCode)
                {
                    var jsonResponse = response.Content.ReadAsStringAsync().Result;
                    empList = JsonConvert.DeserializeObject<List<Employee>>(jsonResponse);                    
                }
            }
            return empList;
        }
    }
}
