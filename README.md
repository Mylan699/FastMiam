# FastMiam

FastMiam est une application web permettant de commander des repas en ligne, offrant une expérience conviviale et efficace pour les utilisateurs. Le projet repose sur ReactJS et Tailwind CSS pour fournir une interface utilisateur moderne et réactive. La gestion des utilisateurs est prise en charge par Clerk, tandis que la base de données des menus et des restaurants est gérée par Hygraph, la version web de [Hygraph](https://app.hygraph.com/).

## Fonctionnalités

- **Commande de repas en ligne**: Les utilisateurs peuvent parcourir les menus des restaurants partenaires et passer des commandes en ligne.
- **Gestion des utilisateurs**: L'authentification et la gestion des utilisateurs sont prises en charge par Clerk, offrant des fonctionnalités de connexion sécurisées.
- **Base de données centralisée**: Les données des menus des restaurants sont gérées par Hygraph, fournissant une interface web conviviale pour gérer les données.

## Prérequis

Avant de commencer à utiliser FastMiam, assurez-vous d'avoir les éléments suivants installés :

- Node.js
- Un compte Clerk pour la gestion des utilisateurs
- Un compte Hygraph pour la gestion des données des menus des restaurants

## Installation

1. Clonez ce repository sur votre machine locale :

git clone https://github.com/Mylan699/FastMiam.git

2. Installez les dépendances en exécutant la commande suivante :

cd FastMiam
npm install

3. Configurez Clerk en suivant les instructions fournies dans leur documentation officielle.

4. Configurez Hygraph en créant un compte et en utilisant l'interface web pour gérer les données des menus des restaurants.

5. Renommez le fichier .env.example en .env et renseignez les variables d'environnement nécessaires, notamment les informations de connexion à Clerk.

6. Lancez l'application en exécutant la commande suivante :

npm start

L'application sera accessible à l'adresse http://localhost:3000.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à FastMiam, veuillez suivre les étapes suivantes :

1. Fork ce repository.
2. Créez une branche pour votre fonctionnalité ou correction de bug (git checkout -b feature/nouvelle-fonctionnalite).
3. Faites vos modifications et committez-les (git commit -am 'Ajout d'une nouvelle fonctionnalité').
4. Poussez vos modifications vers la branche (git push origin feature/nouvelle-fonctionnalite).
5. Créez une nouvelle pull request et décrivez vos modifications.

## Auteurs

- Mylan699

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

---
© 2024 FastMiam. Tous droits réservés.
