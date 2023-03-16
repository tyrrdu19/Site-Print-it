window.addEventListener('DOMContentLoaded', (event) => {

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
		Point.dataset.numero = i;
		if (i === 0) {
			Point.classList.add("dot_selected");
		}
		CreationPoints.appendChild(Point);
	}

	function FoncFlecheDroite() {
		const PointSelectionner = document.querySelector(".dot_selected");
		const DataNumero = PointSelectionner.dataset.numero;
		if (DataNumero != slides.length - 1) {
			PointSelectionner.classList.remove("dot_selected");
			let NouveauPointSelectionnerNumero = +DataNumero + 1;
			const ListeNouveauPointSelectionner = document.querySelectorAll(".dot");
			for (const PointPossible of ListeNouveauPointSelectionner) {
				if (PointPossible.dataset.numero == NouveauPointSelectionnerNumero) {
					PointPossible.classList.add("dot_selected");
				};
			};
			const Image = document.querySelector(".banner-img")
			Image.src = `./assets/images/slideshow/${slides[NouveauPointSelectionnerNumero]["image"]}`
			const Banniere = document.querySelector("#banner p")
			Banniere.innerHTML = `${slides[NouveauPointSelectionnerNumero]["tagLine"]}`
		} else {
			PointSelectionner.classList.remove("dot_selected");
			const ListeNouveauPointSelectionner = document.querySelectorAll(".dot");
			for (const PointPossible of ListeNouveauPointSelectionner) {
				if (PointPossible.dataset.numero == 0) {
					PointPossible.classList.add("dot_selected");
				};
			};
			const Image = document.querySelector(".banner-img")
			Image.src = `./assets/images/slideshow/${slides[0]["image"]}`
			const Banniere = document.querySelector("#banner p")
			Banniere.innerHTML = `${slides[0]["tagLine"]}`
		}
	};

	function FoncFlecheGauche() {
		const PointSelectionner = document.querySelector(".dot_selected");
		const DataNumero = PointSelectionner.dataset.numero;
		if (DataNumero != 0) {
			PointSelectionner.classList.remove("dot_selected");
			let NouveauPointSelectionnerNumero = +DataNumero - 1;
			const ListeNouveauPointSelectionner = document.querySelectorAll(".dot");
			for (const PointPossible of ListeNouveauPointSelectionner) {
				if (PointPossible.dataset.numero == NouveauPointSelectionnerNumero) {
					PointPossible.classList.add("dot_selected");
				};
			};
			const Image = document.querySelector(".banner-img")
			Image.src = `./assets/images/slideshow/${slides[NouveauPointSelectionnerNumero]["image"]}`
			const Banniere = document.querySelector("#banner p")
			Banniere.innerHTML = `${slides[NouveauPointSelectionnerNumero]["tagLine"]}`
		} else {
			PointSelectionner.classList.remove("dot_selected");
			const ListeNouveauPointSelectionner = document.querySelectorAll(".dot");
			for (const PointPossible of ListeNouveauPointSelectionner) {
				if (PointPossible.dataset.numero == slides.length - 1) {
					PointPossible.classList.add("dot_selected");
				};
			};
			const Image = document.querySelector(".banner-img")
			Image.src = `./assets/images/slideshow/${slides[slides.length - 1]["image"]}`
			const Banniere = document.querySelector("#banner p")
			Banniere.innerHTML = `${slides[slides.length - 1]["tagLine"]}`
		}
	};

	const flecheGauche = document.querySelector(".arrow_left");
	flecheGauche.addEventListener("click", function () { FoncFlecheGauche() } );

	const flecheDroite = document.querySelector(".arrow_right");
	flecheDroite.addEventListener("click", function () { FoncFlecheDroite() } );

});
