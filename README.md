# Olympe
## Liste de dieux, héros et monstres de mythologies grecque, égyptienne et nordique.

### Fait avec Angular pour le front et Symfony pour le back.

Possibilité de trier les personnages par panthéon, genre ou type (dieu, héros ou monstre).
Ajout d'un personnage avec upload d'une image stockée en base. 
Connexion obligatoire pour gérer les personnages (génération d'un token).

![Screenshot](/front/src/assets/images/BC.PNG)

### Pour essayer le projet : 

~~~
Avoir composer et node installés
Avoir Wamp qui tourne en local
~~~

Dans un terminal : 
~~~
se placer dans le dossier back puis taper ces commandes :
 - composer install 
 - php bin/console doctrine:database:create
 - php bin/console doctrine:schema:update --force
 - php bin/console doctrine:fixtures:load
 - symfony serve
~~~
Dans un autre terminal : 
~~~
se placer dans le dossier front et taper ces commandes :
 - npm install 
 - ng serve -o
~~~

