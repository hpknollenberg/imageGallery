const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


//Declaring the file name and alternative text for each image file
const pictures = [{name: "img/pic1.jpg", alt: "Closeup of a human eye"},
                {name: "img/pic2.jpg", alt: "Abstract swirly lines of light brown and grayish blues"},
                {name: "img/pic3.jpg", alt: "Purple and white flowers"},
                {name: "img/pic4.jpg", alt: "Hieroglyphics"},
                {name: "img/pic5.jpg", alt: "Brown butterfly on a green leaf"}];

//Looping through images, listening for click
for (i = 0; i <= pictures.length - 1; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pictures[i].name);
    newImage.setAttribute('alt', pictures[i].alt);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    });
}

//Wiring up the Darken/Lighten button
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});