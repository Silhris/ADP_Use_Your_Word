# ADP_Use_Your_Word

## Express Backend
Se rendre dans le dossier **express-backend**

Exécuter la commande ```npm install```

Une fois l'exécution terminée, exécuter ```node index.js```  
Le serveur sera disponible sur le port 3000

La route **/manifest** permet de récupérer (GET) et de sauvegarder (POST) 
le contenu d'un fichier JSON relatif au jeu Use Your Word

## Vue Use Your Word
Se rendre dans le dossier **vuetify-use-your-world**

Exécuter la commande ```yarn install```

**NB**: Si Yarn n'est pas installé, exécuter ```sudo apt-get install yarn```  
Si des problèmes d'installation pour yarn, voir plus bas dans la catégorie "Problèmes d'installation"

## Angular Use Your Word
Se rendre dans le dossier **angular-vue-use-your-world**

Exécuter la commande ```npm install```

Une fois l'exécution terminée, exécuter **ng serve**  
Le site sera disponible sur localhost:4200

Si la commande **ng** n'est pas disponible, exécuter: ```npm install -g @angular/cli``` puis ouvrir un nouveau terminal

Démarrer le front ```yarn dev```

----------------

----------------
**TODO: Déporter les vidéos du client vers un serveur**
(présent dans le dossier public le temps d'effectuer les premiers développement)

# Problèmes d'installation

## Yarn
sudo apt remove cmdtest  
sudo apt remove yarn  
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -  
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list  
sudo apt-get update  
sudo apt-get install yarn

Yarn devrait mainteant être disponible

## NVM

Voir https://github.com/nvm-sh/nvm#git-install

Lors de l'ouverture d'un nouveau terminal, si NVM n'est pas disponible, la commande

```
export NVM_DIR="$HOME/.nvm" && (
  git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
  cd "$NVM_DIR"
  git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"
```

n'a pas été saisi dans le bon fichier soit ```.bashrc```,  ```.bash_profile``` ou  ```.zshrc```

Une fois effectuée, la commande devrait être disponible lors de l'ouverture d'un nouveau terminal