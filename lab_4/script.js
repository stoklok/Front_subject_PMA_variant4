// Завдання 1. n = 4, тому номер елемента: (4 mod 10) + 1 = 5
const fifthElement = document.getElementById("element-5");
const sixthElement = document.querySelector("ul li:nth-child(2)");

// Кожен клік перемикає елемент між двома колірними схемами
function addColorToggle(element, firstScheme, secondScheme) {
    let useFirstScheme = true;

    element.addEventListener("click", () => {
        const scheme = useFirstScheme ? firstScheme : secondScheme;
        element.style.backgroundColor = scheme.background;
        element.style.color = scheme.text;
        useFirstScheme = !useFirstScheme;
    });
}

addColorToggle(
    fifthElement,
    { background: "#1ef02b", text: "#000000" },
    { background: "#ff8c00", text: "#ffffff" }
);
addColorToggle(
    sixthElement,
    { background: "#0000ff", text: "#ffffff" },
    { background: "#ffff00", text: "#000000" }
);

// Завдання 2. Кнопки керування зображеннями
const IMAGE_SRC = "https://cdn.sanity.io/images/nxpteyfv/goguides/e3115b9ee7040c9515b8b45dbedbd82b0b709ddb-1600x1066.jpg";
const DEFAULT_WIDTH = 600;
const MIN_WIDTH = 100;
const WIDTH_STEP = 50;

const gallery = document.getElementById("gallery");

// Збільшення та зменшення діють на останнє зображення
function getLastImage() {
    const images = gallery.querySelectorAll("img");
    return images[images.length - 1];
}

function resizeLastImage(delta) {
    const image = getLastImage();
    if (!image) {
        return;
    }
    const newWidth = image.width + delta;
    image.width = Math.max(MIN_WIDTH, Math.min(newWidth, gallery.clientWidth));
}

document.getElementById("add-image").addEventListener("click", () => {
    const image = document.createElement("img");
    image.src = IMAGE_SRC;
    image.alt = "Панорама міста Гайдельберг";
    image.width = Math.min(DEFAULT_WIDTH, gallery.clientWidth);
    gallery.appendChild(image);
});

document.getElementById("enlarge-image").addEventListener("click", () => {
    resizeLastImage(WIDTH_STEP);
});

document.getElementById("shrink-image").addEventListener("click", () => {
    resizeLastImage(-WIDTH_STEP);
});

document.getElementById("remove-image").addEventListener("click", () => {
    const lastItem = gallery.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
});
