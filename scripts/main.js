const images = document.querySelectorAll(".image");
const mainImageContainer = document.getElementById("main-image-container");
const mainImage = document.getElementById("main-image");
const nextButton = document.getElementById("next-button");
const prevoiusButton = document.getElementById("previous-button");
const frame = document.getElementById("frame");

let mainImageNumber;

const enableDisableNavButtons = () => {
  if (mainImageNumber === images.length) {
    nextButton.style.display = "none";
  } else if (mainImageNumber === 1) {
    prevoiusButton.style.visibility = "hidden";
  } else {
    nextButton.style.display = "block";
    prevoiusButton.style.visibility = "visible";
  }
};

images.forEach((image, i) => {
  image.addEventListener("click", () => {
    mainImageContainer.style.display = "flex";
    mainImage.setAttribute("src", `/images/image${i + 1}.avif`);
    mainImageNumber = i + 1;
    enableDisableNavButtons();
  });
});

nextButton.addEventListener("click", () => {
  if (mainImageNumber < images.length) {
    mainImageNumber++;
    mainImage.setAttribute("src", `/images/image${mainImageNumber}.avif`);
  }
  enableDisableNavButtons();
});

prevoiusButton.addEventListener("click", () => {
  if (mainImageNumber >= 0) {
    mainImageNumber--;
    mainImage.setAttribute("src", `/images/image${mainImageNumber}.avif`);
  }
  enableDisableNavButtons();
});

mainImageContainer.addEventListener("click", (e) => {
  // e.stopPropagation();
  mainImageContainer.style.display = "none";
});

frame.addEventListener("click", (e) => {
  //to avoid closing of main image container on click of frame
  e.stopPropagation();
});
