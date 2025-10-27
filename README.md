# GOIT-JS-HW-11 🚀

This project involves creating a web application for searching and viewing images using the Pixabay API.

## 📝 Project Setup

- Create a repository named `goit-js-hw-11`.
- Build the project using [Vite](https://vite.dev/). We have prepared and recommend using this [pre-configured template](https://github.com/goitacademy/vanilla-app-template).
- Read the task and implement it in your code editor.
- Ensure your code is formatted with `Prettier` and that there are no errors or warnings in the console when you open the live page.
- Submit your assignment for review.

**Submission Format:** The homework must include two links: one to the source files and another to the live page on `GitHub Pages`.

## 🎯 Task — Image Search

Create an application where you can search for images by a keyword and view them within a gallery. Add styling for the UI elements according to the provided layout.

#### :bangbang: Use this [Figma layout](https://www.figma.com/design/m8k9NQV7qZrtYDCvxfD68B/HW-JavaScript?node-id=3-1009&p=f) for styling your tasks.

### 🔍 Search Form

The search form is located in the HTML document. When the user enters a search term and submits the form, an HTTP request should be made with that search term.

### 🌐 HTTP Requests

For the backend, use the public API of the [Pixabay](https://pixabay.com/api/docs/) service. Register, get your unique access key, and review the [documentation](https://pixabay.com/api/docs/#api_search_images).

The required query string parameters are:

- `key` — Your unique access key for the API.
- `q` — The search term entered by the user.
- `image_type` — The type of image. Only photos are needed, so use the value `photo`.
- `orientation` — The orientation of the photo. Use the value `horizontal`.
- `safesearch` — Age filter. Use the value `true`.

The response will be an object with several properties, one of which will contain an array of images that match the query parameters.

If the backend returns an empty array, it means nothing suitable was found. In this case, display the message `"Sorry, there are no images matching your search query. Please try again!"`. Use the [iziToast](https://marcelodolza.github.io/iziToast/) library for notifications.

To include the library's CSS code in the project, you need to add another import in addition to what is specified in the documentation.

```javascript
// Import as specified in the documentation
import iziToast from "izitoast";
// Import for styles
import "izitoast/dist/css/iziToast.min.css";
```

Watch the demo video of the application at this stage:

![Video of Search and Notification](./src/images/readmefiles/assignment-video-1.gif)

### 🖼️ Gallery and Image Cards

The gallery (a list of elements of the same type) is located in the HTML document and should be used to add the layout of image cards after the HTTP requests.

Each image is represented by an object with the following properties:

- `webformatURL` — Link to the small image for the gallery card list.
- `largeImageURL` — Link to the large image for the modal window.
- `tags` — A string with a description of the image. Suitable for the `alt` attribute.
- `likes` — Number of likes.
- `views` — Number of views.
- `comments` — Number of comments.
- `downloads` — Number of downloads.

You must completely clear the gallery's content before searching for a new keyword, so that the query results do not get mixed up.

Watch the demo video of the application at this stage:

![Video of Gallery Creation](./src/images/readmefiles/assignment-video-2.gif)

### 💡 `SimpleLightbox` Library

For a complete gallery experience, display a larger version of the image using the [SimpleLightbox](https://simplelightbox.com/) library.

To include the library's CSS code in the project, you need to add another import in addition to what is specified in the documentation.

```javascript
// Import as specified in the documentation
import SimpleLightbox from "simplelightbox";
// Import for styles
import "simplelightbox/dist/simple-lightbox.min.css";
```

- You will need to wrap each image card in a link as specified in the [«Markup»](https://github.com/andreknieriem/simplelightbox#markup) section of the documentation.
- The library has a [refresh()](https://github.com/andreknieriem/simplelightbox#public-methods) method that must be called after adding new elements to the gallery.

Watch the demo video of the application at this stage:

![Video of SimpleLightbox Integration](./src/images/readmefiles/assignment-video-3.gif)

### 🔄 Loading Indicator

Add an element that informs the user that images are being loaded from the backend. The loader should appear just before the HTTP request begins and disappear after the request is completed.

Watch the demo video of the application at this stage:

![Video of Loading Indicator](./src/images/readmefiles/assignment-video-4.gif)

Instead of a simple text as in the video, you can use a library that provides nice loading indicators, such as [css-loader](https://github.com/vineethtrv/css-loader). A video instruction for using this library is available in the project's [README.md](https://github.com/vineethtrv/css-loader/blob/master/README.md).

### ✅ Mentor's Checklist:

- The submission includes two links: to the source files and to the live page on `GitHub Pages`.
- The project is built using [Vite](https://vite.dev/).
- The console in the developer tools does not contain errors, warnings, or console logs.
- The `iziToast`, `SimpleLightbox`, and `css-loader` libraries are added to the project.
- The elements on the page are styled according to the layout (or with your own styles).
- The page contains a search form for searching images by a search term.
- When the form is submitted, a loading indicator from `css-loader` appears before the request to the backend is sent, and the previous search results on the page are cleared.
- When the form is submitted, a request is sent to the backend to search for images by keyword with specific parameters.
- Upon receiving a response from the backend, the loading indicator disappears, and images are rendered on the page based on the data received from the backend, or a message is shown indicating that no suitable results were found.
- New images are added to the DOM in a single operation.
- After adding new elements to the image list, the `refresh()` method is called on the `SimpleLightbox` instance.
- When a small image in the gallery is clicked, an enlarged version opens in a modal window using the `SimpleLightbox` library.
- `then()` and `catch()` methods are used to handle possible errors during HTTP requests and prevent the page from crashing.
