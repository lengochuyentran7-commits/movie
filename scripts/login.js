async function showHero() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=vi-VN`);
  const data = await res.json();

  const container = document.getElementById("hero-slides");
  container.innerHTML = data.results.slice(0, 5).map((movie, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="${IMG_URL + movie.backdrop_path}" class="d-block w-100" style="height:600px;object-fit:cover;opacity:0.6;" alt="${movie.title}">
      <div class="carousel-caption text-start">
        <h2 class="fw-bold display-4">${movie.title}</h2>
        <p class="lead">${movie.overview}</p>
        <a href="./info.html?id=${movie.id}" class="btn btn-danger btn-lg">Chi tiết</a>
      </div>
    </div>
  `).join("");
}

showHero();