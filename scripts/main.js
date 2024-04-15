const imageModal = document.getElementById("image-modal");
const selectedImage = document.getElementById("selected-image");
const nextButton = document.getElementById("next-button");
const prevoiusButton = document.getElementById("previous-button");
const imageContainer = document.getElementById("image-container");
const galleryContainer = document.getElementById("gallery-container");

const data = {
  images: [
    "/images/image1.avif",
    "/images/image2.avif",
    "/images/image3.avif",
    "/images/image4.avif",
    "/images/image5.avif",
    "/images/image6.avif",
    "/images/image7.avif",
    "/images/image8.avif",
    "/images/image9.avif",
    "/images/image10.avif",
    "/images/image11.avif",
    "/images/image12.avif",
    "/images/image13.avif",
    "/images/image14.avif",
    "/images/image15.avif",
    "/images/image16.avif",
    "/images/image17.avif",
    "/images/image18.avif",
    "/images/image19.avif",
    "/images/image20.avif",
    "/images/image21.avif",
    "/images/image22.avif",
    "/images/image23.avif",
    "/images/image24.avif",
  ],
};

let selectedImageNumber;

//create images
for (let i = 0; i < data.images.length; i++) {
  const image = document.createElement("img");
  image.classList.add("image");
  image.setAttribute("src", data.images[i]);
  image.onclick = () => {
    imageModal.style.display = "flex";
    selectedImage.setAttribute("src", `/images/image${i + 1}.avif`);
    selectedImageNumber = i + 1;
    manageNavigationButtons();
  };
  galleryContainer.appendChild(image);
}

const manageNavigationButtons = () => {
  if (selectedImageNumber === data.images.length) {
    nextButton.style.display = "none";
    prevoiusButton.style.visibility = "visible";
  } else if (selectedImageNumber === 1) {
    prevoiusButton.style.visibility = "hidden";
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "block";
    prevoiusButton.style.visibility = "visible";
  }
};

nextButton.onclick = () => {
  if (selectedImageNumber < data.images.length) {
    selectedImageNumber++;
    selectedImage.setAttribute(
      "src",
      `/images/image${selectedImageNumber}.avif`
    );
  }
  manageNavigationButtons();
};

prevoiusButton.onclick = () => {
  if (selectedImageNumber >= 0) {
    selectedImageNumber--;
    selectedImage.setAttribute(
      "src",
      `/images/image${selectedImageNumber}.avif`
    );
  }
  manageNavigationButtons();
};

imageModal.onclick = (e) => {
  // e.stopPropagation();
  imageModal.style.display = "none";
};

imageContainer.onclick = (e) => {
  //to avoid closing of main image container on click of imageContainer
  e.stopPropagation();
};
