import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loader = document.createElement("div");
loader.className = "loader";
document.body.appendChild(loader);

const PIXABAY_API_KEY = "52959692-31d35c92f7dfbf79895bf5e4e";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search query.",
      position: "bottomRight",
    });
    return;
  }

  gallery.innerHTML = "";
  loader.textContent = "Loading images, please wait...";
  loader.style.display = "block";

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.info({
        title: "Info",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "bottomRight",
      });
    } else {
      renderGallery(data.hits);
      const lightbox = new SimpleLightbox(".gallery a");
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
      position: "bottomRight",
    });
  } finally {
    loader.style.display = "none";
  }
});

function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <ul class="info">
          <li class="info-item"><b>Likes</b> ${likes}</li>
          <li class="info-item"><b>Views</b> ${views}</li>
          <li class="info-item"><b>Comments</b> ${comments}</li>
          <li class="info-item"><b>Downloads</b> ${downloads}</li>
        </ul>
      </a>
    `
    )
    .join("");
  gallery.innerHTML = markup;
}
