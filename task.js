const img = document.getElementById("cookie")
let clickCounter = document.getElementById("clicker__counter");

clickCounter.textContent = 0;

if (img.width === 355 && img.height === 367) {
		img.onclick = () => {
		img.width -= 20
		img.height -= 20
		clickCounter.textContent++;
}
} else {img.onclick = () => {
		img.width += 20
		img.height += 20
		clickCounter.textContent++;
}};
