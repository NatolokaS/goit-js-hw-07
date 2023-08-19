import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
// Change code below this line

const listEl = document.querySelector(".gallery");

const renderList = (galleryItems, container) => {
  const markup = galleryItems
    .map(
        (item) => `<li class="item gallery__item">
      <a class="gallery__link" href="${item.original}" >
  <img class="gallery__image" data-source="${item.original}" alt="${item.description}" src="${item.preview}" width="300" />
  </a>
  </li>`
    )
  .join("");
    
  container.insertAdjacentHTML("beforeend", markup);
};

const handleListClick = (event) => {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`,{
      onShow: () => {
        window.addEventListener("keydown", onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", onKeydownEsc);
      },
    });
  const onKeydownEsc = (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  };
instance.show()
};

renderList(galleryItems, listEl);
listEl.addEventListener("click", handleListClick);
