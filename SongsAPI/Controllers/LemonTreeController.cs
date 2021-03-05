using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SongsAPI.Controllers
{
    [ApiController]
    // [Route("[controller]")]
    public class LemonTreeController : ControllerBase
    {
        private LemonTree myLemonTree = new LemonTree();


        private readonly ILogger<LemonTreeController> _logger;

        public LemonTreeController(ILogger<LemonTreeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("testHealth")]
        public String Get()
        {
            return "Hello from the Songs API";
        }

        [HttpGet]
        [Route("[controller]/LemonTree")]
        public String GetLemonTree()
        {
            return myLemonTree.Lemontree;
        }

        [HttpGet]
        [Route("[controller]/StayinAlive")]
        public String GetStayinAlive()
        {
            return myLemonTree.Stainalive;
        }

        [HttpGet]
        [Route("[controller]/SweetChild")]
        public String GetSweetChild()
        {
            return myLemonTree.Sweetchild;
        }
    }
}