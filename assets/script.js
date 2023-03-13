const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const CreationPoints = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
	const Point = document.createElement("i");
	Point.classList.add("dot");
	Point.setAttribute("id", i)
	if (i === 0) {
		Point.classList.add("dot_selected");
	}
	CreationPoints.appendChild(Point);
}

const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", function () {
	alert("g")
} );

const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", function () {
	const PointSelectionner = document.querySelector(".dot_selected");
	const AttributID = PointSelectionner.id;
	// if ... pour boucler
	PointSelectionner.classList.remove("dot_selected");
	let NouveauPointSelectionnerID = "#"+ (+AttributID + 1);
	const NouveauPointSelectionner = document.querySelector(NouveauPointSelectionnerID);
	NouveauPointSelectionner.classList.add("dot_selected");
} );

/*
	if (+AttributID === slides.length) {
		PointSelectionner.item(0).classList.remove("dot_selected");
		const NouveauPointSelectionner = document.querySelector("0");
		NouveauPointSelectionner.classList.add("dot_selected");
	} else {
*/