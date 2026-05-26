#  MIOLA Shop - Projet FullStack avec Assistant IA Métier

Conformément aux consignes de l'atelier, la base de données (MySQL) et le backend (Spring Boot) sont conteneurisés via Docker. Le frontend (React) s'exécute en local.

##  Valeur Métier (Intégration IA)
L'application intègre un **Conseiller Commercial IA** (Spring AI + Ollama). Il utilise le contexte de la base de données pour proposer la voiture idéale au client en langage naturel, offrant une vraie plus-value commerciale.

## 🛠 Prérequis
1. **Docker et Docker Compose** installés.
2. **Ollama** installé sur la machine hôte pour faire tourner le LLM localement en tâche de fond (`ollama run llama3.2`).
3. **Node.js** installé pour lancer la partie React.

##  Commandes pour tester le projet

### Étape 1 : Lancer l'infrastructure (Backend + MySQL)
Depuis la racine du projet Spring Boot, compilez le projet puis lancez les conteneurs :

#### 1. Générer le fichier .jar
./mvnw clean package -DskipTests

#### 2. Lancer Docker Compose
docker-compose up -d --build

L'API sera disponible sur http://localhost:9090/api

### Étape 2 : Lancer l'interface client (Frontend React)
Ouvrez un nouveau terminal, placez-vous dans le dossier du frontend et lancez ces commandes :
 1. Installer les dépendances
npm install

 2. Lancer l'application React
npm start

L'interface s'ouvrira sur http://localhost:3000

### Étape 3 : Test de l'IA
Cliquez sur l'onglet Assistant IA

Demandez par exemple : "Je cherche une voiture économique et rouge." L'IA consultera la base de données Docker et vous répondra avec un argumentaire de vente basé sur le stock réel.

## ☸ Déploiement avec Kubernetes (Minikube)

En plus de Docker Compose, ce projet est configuré pour être déployé sur un cluster Kubernetes. Les manifestes se trouvent dans le dossier `k8s/`.

### Commandes d'exécution pour l'évaluation :

**1. Démarrer le cluster local :**
`minikube start`

**2. Déployer l'infrastructure (Base de données et Backend) :**
Appliquez tous les manifestes d'un coup en pointant vers le dossier :
`kubectl apply -f k8s/`

**3. Vérifier que les pods sont en cours d'exécution :**
`kubectl get pods`

**4. Exposer l'application et récupérer l'URL d'accès :**
`minikube service springboot-service --url`

*Note : Utilisez l'URL générée par la commande précédente pour configurer l'appel API dans l'application React, puis lancez le frontend avec `npm start`.*