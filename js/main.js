const displayedImageOne = document.querySelector('.displayed-img');
const displayedImageTwo = document.querySelector('.displayed-img-2');

const thumbBarOne = document.querySelector('.thumb-bar');
const thumbBarTwo = document.querySelector('.thumb-bar-2');

const btnOne = document.querySelector('#button');
const btnTwo = document.querySelector('#button-2');

const overlayOne = document.querySelector('.overlay');
const overlayTwo = document.querySelector('.overlay-2');

overlayTwo.style.width = displayedImageTwo.offsetWidth + "px";

//Declaring the file name and alternative text for each image file
const pictures = [{name: "img/pic1.jpg", alt: "Closeup of a human eye"},
                {name: "img/pic2.jpg", alt: "Abstract swirly lines of light brown and grayish blues"},
                {name: "img/pic3.jpg", alt: "Purple and white flowers"},
                {name: "img/pic4.jpg", alt: "Hieroglyphics"},
                {name: "img/pic5.jpg", alt: "Brown butterfly on a green leaf"}];

const sandmanPictures = [{name: "img_sandman/death.jpg", alt: "A closeup of Death's face"},
                {name: "img_sandman/delirium.jpg", alt: "A closeup of Delirium's face with a quote reading 'Our existence deforms the universe. This is responsibility.'"},
                {name: "img_sandman/desire.jpg", alt: "A closeup of Desire's face"},
                {name: "img_sandman/despair.jpg", alt: "A closeup of Despair's face, picture frames of her in the background"},
                {name: "img_sandman/destiny.jpg", alt: "A medium shot of Destiny"}]


//Looping through images, listening for click, changes displayed image, changes overlay size
function imageGallery(arr, thumbBar, displayedImage, overlay) {
    for (i = 0; i <= arr.length - 1; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', arr[i].name);
        newImage.setAttribute('alt', arr[i].alt);
        thumbBar.appendChild(newImage);
    
        newImage.addEventListener("click", () => {
            displayedImage.setAttribute('src', newImage.getAttribute('src'));
            displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
            overlay.style.width = displayedImage.offsetWidth + "px";
        });    
    }
}

imageGallery(pictures, thumbBarOne, displayedImageOne, overlayOne);
imageGallery(sandmanPictures, thumbBarTwo, displayedImageTwo, overlayTwo);


//Wiring up the Darken/Lighten button

function darkenLighten(btn, overlay) {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}

btnOne.addEventListener("click", () => {darkenLighten(btnOne, overlayOne)});
btnTwo.addEventListener("click", () => {darkenLighten(btnTwo, overlayTwo)});



