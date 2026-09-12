import { TMDB_API_KEY, BASE_URL, IMG_URL } from "./config.js";
async function getMovies(url, title) {
  const res = await fetch(`${BASE_URL}${url}?api_key=${TMDB_API_KEY}&language=vi-VN`);
  const data = await res.json();

  document.querySelector("main").innerHTML += `
    <div class="section my-5">
      <h2 class="mb-3">${title}</h2>
      <div class="row g-4">
        ${data.results.map(m => `
          <div class="col-6 col-md-3 col-lg-2">
            <div class="card bg-dark text-light h-100">
              <img src="${IMG_URL + m.poster_path}" class="card-img-top" alt="${m.title}">
              <div class="card-body p-2">
                <h6 class="card-title">${m.title}</h6>
                <a href="./info.html?id=${m.id}" class="btn btn-sm btn-danger">Chi tiết</a>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
getMovies("/movie/popular", "Phim phổ biến");
getMovies("/movie/top_rated", "Phim được đánh giá cao");
getMovies("/movie/upcoming", "Phim sắp chiếu");