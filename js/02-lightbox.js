import { galleryItems } from './gallery-items.js';
// Change code below this line


const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  listItem.innerHTML = `
    <a class='gallery__link' href='${item.original}'>
      <img class="gallery__image"
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}' />
    </a>
  `;
  listEl.append(listItem);
});

listEl.addEventListener("click", openImageInModal);

function openImageInModal(event) {
  event.preventDefault();
  const clickedOn = event.target;

  if (clickedOn.nodeName !== "IMG") {
    return;
  }

  const imageUrl = clickedOn.dataset.source;

  // Using basicLightbox to create a lightbox instance
  const lightbox = basicLightbox.create(`
    <img width="1400" height="900" src="${imageUrl}">
  `);

  lightbox.show();
}

