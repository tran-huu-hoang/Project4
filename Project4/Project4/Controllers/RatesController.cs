using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Models;
using Project4.Services.RateService;

namespace Project4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatesController : ControllerBase
    {
        private readonly IRateService _rateService;

        public RatesController(IRateService rateService)
        {
            _rateService = rateService;
        }

        // GET: api/Rates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rate>>> GetRates()
        {
            return Ok(await _rateService.GetRates());
        }

        // GET: api/Rates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rate>> GetRate(int id)
        {
            var result = await _rateService.GetRate(id);
            if (result == null)
            {
                return NotFound("Không tìm thấy sản phẩm");
            }

            return Ok(result);
        }

        // PUT: api/Rates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRate(int id, Rate rate)
        {
            if (id != rate.Id)
            {
                return BadRequest();
            }

            var result = await _rateService.PutRate(id, rate);
            if (result == null)
            {
                return NotFound("Không tìm thấy nhà cung cấp");
            }

            return Ok(result);
        }

        // POST: api/Rates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rate>> PostRate(Rate rate)
        {
            var result = await _rateService.PostRate(rate);

            return Ok(result);
        }

        // DELETE: api/Rates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRate(int id)
        {
            var result = await _rateService.DeleteRate(id);
            if (result == null)
            {
                return NotFound("Không tìm thấy nhà cung cấp");
            }

            return Ok(result);
        }


    }
}
