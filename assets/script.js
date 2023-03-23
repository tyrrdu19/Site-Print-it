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

	const CreationPoints = document.querySelector(".dots"); // sélectionne la balise de classe "dots" (un div).
	for (let i = 0; i < slides.length; i++) { // boucle qui tourne sur la taille de "slides" au dessus (4 fois). Elle crée une balise <i> et lui ajoute la classe "dot" et l'atribut numéro
		const Point = document.createElement("i");
		Point.classList.add("dot");
		Point.dataset.numero = i;
		if (i === 0) {
			Point.classList.add("dot_selected"); // ajoute la classe "dot_selected" au premier bullet point.
		}
		CreationPoints.appendChild(Point); // ajoute le bullet point a l'intérieur du div
	}

	function FoncFlecheDroite() {
		const PointSelectionner = document.querySelector(".dot_selected"); // sélectionne le bullet point actif
		const DataNumero = PointSelectionner.dataset.numero; // récupère la valeur de l'attribut "numero"
		if (DataNumero != slides.length - 1) { // condition si ce n'est pas le dernier point
			PointSelectionner.classList.remove("dot_selected");
			let NouveauPointSelectionnerNumero = +DataNumero + 1; // ajoute 1 à la valeur récupéré précédement
			const ListeNouveauPointSelectionner = document.querySelectorAll(".dot"); // sélectionne tout les bullet points
			for (const PointPossible of ListeNouveauPointSelectionner) { // boucle dans la liste crée au dessus
				if (PointPossible.dataset.numero == NouveauPointSelectionnerNumero) { // ajoute la classe "dot_selected" au point avec la valeur de l'attribut "numero" correspondant
					PointPossible.classList.add("dot_selected");
				};
			};
			const Image = document.querySelector(".banner-img")
			Image.src = `./assets/images/slideshow/${slides[NouveauPointSelectionnerNumero]["image"]}` // change l'attribut "src" de la balise sélectionné au dessus en prenant l'information de la liste "slides"
			const Banniere = document.querySelector("#banner p")
			Banniere.innerHTML = `${slides[NouveauPointSelectionnerNumero]["tagLine"]}` // remplace l'intérieur de la balise p sélectionné au dessus par ce qui se trouve dans la liste "slides"
		} else { // condition si c'est le dernier point
			PointSelectionner.classList.remove("dot_selected");
			const ListeNouveauPointSelectionner = document.querySelectorAll(".dot");
			for (const PointPossible of ListeNouveauPointSelectionner) {
				if (PointPossible.dataset.numero == 0) { // on cherche directement le premier bullet point
					PointPossible.classList.add("dot_selected");
				};
			};
			const Image = document.querySelector(".banner-img")
			Image.src = `./assets/images/slideshow/${slides[0]["image"]}`
			const Banniere = document.querySelector("#banner p")
			Banniere.innerHTML = `${slides[0]["tagLine"]}`
		}
	};

	function FoncFlecheGauche() { // fonctionne de la même façon que FoncFlecheDroite mais dans le sens inverse (vers les négatifs)
		const PointSelectionner = document.querySelector(".dot_selected");
		const DataNumero = PointSelectionner.dataset.numero;
		if (DataNumero != 0) { // condition si ce n'est pas le premier point
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
				if (PointPossible.dataset.numero == slides.length - 1) { // on cherche directement le dernier bullet point
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