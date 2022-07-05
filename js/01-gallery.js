import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
	.map(({ preview, original, description }) => {
		return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
		<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
	</a>
</div>`;
	})
	.join("");

galleryRef.innerHTML = galleryItemsMarkup;

const onImageClick = function (event) {
	event.preventDefault();

	if (event.target.classList.contains("gallery")) {
		return;
	}

	const source = event.target.dataset.source;

	const instance = basicLightbox
		.create(
			`
		<img width="1280" src="${source}">
	`,
		)
		.show();
};

galleryRef.addEventListener("click", onImageClick);
