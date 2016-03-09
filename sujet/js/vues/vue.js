"use strict";
/**
 * Gestion de la vue principale de l'application
 */
class Vue
{
	/**
	 * Constructeur
	 */
	constructor()
	{
		//A faire
		document.addEventListener("click",function(event){controleur.gererClick(event);},false);
		controleur.ajouterEvenementClick("btn-commander-matieres-premieres",function(){
			controleur.commanderMatieresPremieres();}
			);
		controleur.ajouterEvenementClick("btn-produire-velo",function(){
			controleur.produireVelo();}
			);
		controleur.ajouterEvenementClick("btn-produire-scooter",function(){
			controleur.produireScooter();}
			);
		controleur.ajouterEvenementClick("btn-produire-voiture",function(){
			controleur.produireVoiture();}
			);
		controleur.ajouterEvenementClick("btn-recruter",function(){
			controleur.recruter();}
			);
		controleur.ajouterEvenementClick("btn-licencier",function(){
			controleur.licencier();}
			);
	}	
		

	/**
	 * Actualise l'affichage de la page
	 * @param entreprise {Entreprise} Informations sur l'entreprise
	 * @param consommateurs {Consommateurs} Informations sur les consommateurs
	 */
	actualiser(entreprise, consommateurs)
	{
		//Actualisation des ressources
		this.actualiserRessources(entreprise);

		//Actualisation de la production
		this.actualiserProduction(entreprise);

		//Actualisation du stock
		this.actualiserStock(entreprise);

		//Actualisation du stock
		this.actualiserDemandes(consommateurs);
	}

	/**
	 * Actualise le niveau des ressources
	 * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées les ressources
	 */
	actualiserRessources(entreprise)
	{
		//A faire
		var stock = document.getElementById("stock");
		var matiere = document.getElementById("matieres-premieres");
		var ressources= document.getElementById("ressources-humaines");
		var tresorerie = document.getElementById("tresorerie");
		stock.innerHTML = "Stock "+entreprise.getEspaceStockageOccupe()+"/"+entreprise.getEspaceStockageTotal();
		matiere.innerHTML = "Matières "+entreprise.getMatieresPremieres();
		ressources.innerHTML = "Ressources humaines "+entreprise.getRessourcesHumainesOccupees()+"/"+entreprise.getRessourcesHumainesTotal();
		tresorerie.innerHTML = "Tresorerie "+entreprise.getTresorerie();
	}

	/**
	 * Actualise la production en cours
	 * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées informations de production
	 */
	actualiserProduction(entreprise)
	{
		//A faire
		var velo = new Velo();
		var prodvelo = document.getElementById("info-production-velo");
		var prodscooter = document.getElementById("info-production-scooter");
		var prodvoiture = document.getElementById("info-production-voiture");
		prodvelo.innerHTML = entreprise.getQuantiteProduction(velo);
		console.log(entreprise.getQuantiteProduction(velo));
		prodscooter.innerHTML = entreprise.getQuantiteProduction(entreprise.typeProduit);
		prodvoiture.innerHTML = entreprise.getQuantiteProduction(entreprise.typeProduit);
		
	}

	/**
	 * Actualise le stock
	 * @param entreprise {Entreprise} Entreprise pour laquelle est affiché l'état du stock
	 */
	actualiserStock(entreprise)
	{
		//A faire
		var stockvelo = document.getElementById("info-stock-velo");
		var stockscooter = document.getElementById("info-stock-scooter");
		var stockvoiture = document.getElementById("info-stock-voiture");
		stockvelo.innerHTML = entreprise.getQuantiteStock(entreprise.typeProduit);
		stockscooter.innerHTML = entreprise.getQuantiteStock(entreprise.typeProduit);
		stockvoiture.innerHTML = entreprise.getQuantiteStock(entreprise.typeProduit);
		
	}

	/**
	 * Actualise la demande des consommateurs
	 * @param consommateurs {Consommateurs} Consommateurs pour lesquels sont affichées les demandes en produits
	 */
	actualiserDemandes(consommateurs)
	{
		//A faire
		var prodvelo = document.getElementById("info-demandes-velo");
		var prodscooter = document.getElementById("info-demandes-scooter");
		var prodvoiture = document.getElementById("info-demandes-voiture");
		prodvelo.innerHTML = consommateurs.getDemandeVelo();
		prodscooter.innerHTML = consommateurs.getDemandeScooter();
		prodvoiture.innerHTML = consommateurs.getDemandeVoiture();
	}

	//#region Gestion des alertes
	/**
	 * Affiche une erreur
	 * @param erreur {string} Erreur à afficher
	 */
	afficherErreur(erreur)
	{
		this.afficherAlerte(erreur, 'erreur');
	}

	/**
	 * Affiche une actualité
	 * @param actualite {string} Titre de l'actualité à afficher
	 */
	afficherActualite(actualite)
	{
		this.afficherAlerte(actualite, 'actualite');
	}

	/**
	 * Affiche l'écran de fin de partie
	 */
	afficherFinPartie()
	{
		document.getElementById('ecran-fin-partie').classList.add('visible');
	}

	/**
	 * Affiche une alerte
	 * @param titre {string} Texte de l'alerte
	 * @param type {string} Type d'alerte (erreur ou actualite)
	 */
	afficherAlerte(titre, type)
	{
		var alerte = document.createElement('p');
		alerte.classList.add(type);

		alerte.innerHTML = titre;

		var alertes = document.getElementById('alertes');
		alertes.appendChild(alerte);

		//Efface l'alerte après 5 secondes
		setTimeout(function () { controleur.retirerAlerte(); }, 5000);
	}

	/**
	 * Efface la première alerte de la page
	 */
	retirerAlerte()
	{
		var alerte = document.querySelector('#alertes p');
		alerte.parentNode.removeChild(alerte);
	}

	//#endregion
}