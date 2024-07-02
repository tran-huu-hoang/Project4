using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Models;
using Project4.Services.CategoryService;
using Project4.Services.FavouriteProductService;

namespace Project4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavouriteProductsController : ControllerBase
    {
        private readonly IFavouriteProductService _favouriteProductService;

        public FavouriteProductsController(IFavouriteProductService favouriteProductService)
        {
            _favouriteProductService = favouriteProductService;
        }

        // GET: api/FavouriteProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FavouriteProduct>>> GetFavouriteProducts()
        {
            return Ok(await _favouriteProductService.GetFavouriteProducts());
        }

        // GET: api/FavouriteProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FavouriteProduct>> GetFavouriteProduct(int id)
        {
            var result = await _favouriteProductService.GetFavouriteProduct(id);
            if (result == null)
            {
                return NotFound("Không tìm thấy danh mục");
            }

            return Ok(result);
        }

        // PUT: api/FavouriteProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavouriteProduct(int id, FavouriteProduct favouriteProduct)
        {
            if (id != favouriteProduct.Id)
            {
                return BadRequest();
            }

            var result = await _favouriteProductService.PutFavouriteProduct(id, favouriteProduct);
            if (result == null)
            {
                return NotFound("Không tìm thấy danh mục");
            }

            return Ok(result);
        }

        // POST: api/FavouriteProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FavouriteProduct>> PostFavouriteProduct(FavouriteProduct favouriteProduct)
        {
            var result = await _favouriteProductService.PostFavouriteProduct(favouriteProduct);

            return Ok(result);
        }

        // DELETE: api/FavouriteProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavouriteProduct(int id)
        {
            var result = await _favouriteProductService.DeleteFavouriteProduct(id);
            if (result == null)
            {
                return NotFound("Không tìm thấy danh mục");
            }

            return Ok(result);
        }
    }
}
