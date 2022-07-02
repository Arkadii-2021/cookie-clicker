const img = document.getElementById("cookie")
let clickCounter = document.getElementById("clicker__counter");

img.onclick = function() {
	if (clickCounter.textContent % 2 == 0) {
		img.width -= 20
		img.height -= 20
		clickCounter.textContent++;
	} else if (clickCounter.textContent % 2 != 0){
		img.width += 20
		img.height += 20
		clickCounter.textContent++;
	}
}

