# Utilisation de l'image Node.js LTS Alpine
FROM node:lts-alpine

# Définition du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie du fichier package.json et package-lock.json (s'ils existent)
COPY ProjetReactEcommerce/package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers de l'application du répertoire local vers le conteneur
COPY ProjetReactEcommerce .

# Exposition du port 3000 (le port que votre application utilise)
EXPOSE 3000

# Commande à exécuter lorsque le conteneur démarre
CMD ["node", "app.js"]