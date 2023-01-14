// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
//  Вивести зображення з цієї папки, отримане випадковим чином(Math.random)

// const img = document.createElement("img");
// img.setAttribute("width", "100%"); 
// img.setAttribute("src", `image/${Math.round(Math.random() * (9 - 1) + 1)}.jpg`);
// document.body.append(img);

function getImage() {
    img.setAttribute("src", `image/${Math.round(Math.random() * (9 - 1) + 1)}.jpg`);
};

const img = document.createElement("img");

img.setAttribute("width", "100%");

setInterval(() => getImage(Math.round(Math.random() * (9 - 1) + 1)), 1500);

document.body.append(img);







































    
