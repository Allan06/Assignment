# PROJET

Aller vers le [sujet du projet](http://miageprojet2.unice.fr/Intranet_de_Michel_Buffa/Technlogies_Web_2_-_Master_2_Miage/MBDS_Mini_Projet_2020-2021_Am%c3%a9liorer_le_TP_de_gestion_des_assignments).


## Description

    - Je devais effectuer le projet avec un autre étudiant (Manotiana), mais ce dernier ayant quitté le Master 2 MBDS pour des raisons personnels, j'ai effectué le projet seul.

Les données utlisée pour les tests se trouve [inbci](assignment-app/Données.json).

## Travaux effectués

### Fonctionnel
  - Génération de 1000 lignes de données de test sur le site [generatedata.com](https://www.generatedata.com/).
    - Assignment : 
      - id : number
      - nom : string
      - matiere : string
      - auteur : string
      - note : number
      - remarques : string
      - dateDeRendu : Date
      - rendu : boolean

  - Maj des champs d'éditions et d'ajouts pour prendre en compte les nouvelles infos des assignments
  - Insertion des données dans ma base MongoAtlas à l'aide de [MongoDBCompas](https://www.mongodb.com/try/download/compass)
  - Ajout d'un scroll infini (20 par 20) sur le visuel du tableau (visuel par défaut)


### Visuel
    - Amélioration du visuel d'accueil et de détail
    - Test de différents visus notamment avec des tableaux de devoir en mode scrolling (défaut) et un autre en mode pagination (erreurs).

# Difficultés
    - Gestion des conditions *ngIF pour l'affichage ou non des propriétés selon le rendu ou non des devoirs
    - Mise en place des Users
    - Redemarrage aléatoire intempestifs d'Angular 

# Quelques sources utilisées
  - [Pagination](https://material.angular.io/components/table/overview#pagination)
  - [Login](https://stackblitz.com/edit/angular-material-login-form?file=src%2Fmain.ts)
  - [Scrolling](https://medium.com/codetobe/learn-how-to-us-virtual-scrolling-in-angular-7-51158dcacbd4)
  

# Démarrer le projet

## [api](http://localhost:8010/api/assignments)

- npm i
- node server.js

## [assignment-app](http://localhost:4200)

- npm i
- ng serve

# ANGULAR - AssignmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
