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
	}

	/**
	 * Actualise la production en cours
	 * @param entreprise {Entreprise} Entreprise pour laquelle sont affichées informations de production
	 */
	actualiserProduction(entreprise)
	{
		//A faire
	}

	/**
	 * Actualise le stock
	 * @param entreprise {Entreprise} Entreprise pour laquelle est affiché l'état du stock
	 */
	actualiserStock(entreprise)
	{
		//A faire
	}

	/**
	 * Actualise la demande des consommateurs
	 * @param consommateurs {Consommateurs} Consommateurs pour lesquels sont affichées les demandes en produits
	 */
	actualiserDemandes(consommateurs)
	{
		//A faire
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