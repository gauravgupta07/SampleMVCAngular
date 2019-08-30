using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using MVCWebApiApplication.Business;
using MVCWebApiApplication.Models;
using Newtonsoft.Json;

namespace MVCWebApiApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly IDetails _details;
        private readonly string _url = System.Configuration.ConfigurationManager.AppSettings["ApiUrl"]; 
        public HomeController()
        {
            _details = new EmployeeDetails();
        }
        public async Task<ActionResult> Index()
        {
            var employees = new List<Employee>();
            if (!string.IsNullOrEmpty(_url))
            {
             employees = await _details.GetEmployee(_url);
            }
            return JsonResult(employees, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "";
            return View();
        }
    }
}