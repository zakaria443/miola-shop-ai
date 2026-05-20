package org.cours.projet.service;

import org.cours.projet.modele.Voiture;
import org.cours.projet.modele.VoitureRepo;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AiConseillerService {

    private final ChatClient chatClient;
    private final VoitureRepo voitureRepo;

    // Injection des dépendances
    public AiConseillerService(ChatClient.Builder chatClientBuilder, VoitureRepo voitureRepo) {
        this.chatClient = chatClientBuilder.build();
        this.voitureRepo = voitureRepo;
    }

    public String conseillerClient(String questionClient) {
        // 1. Récupérer l'inventaire actuel des voitures depuis la base de données
        List<Voiture> voitures = (List<Voiture>) voitureRepo.findAll();

        // 2. Formater cet inventaire en texte pour que le LLM puisse le lire
        String inventaire = voitures.stream()
                .map(v -> v.getMarque() + " " + v.getModele() + " (" + v.getCouleur() + ") - Année " + v.getAnnee() + " - " + v.getPrix() + " DH")
                .collect(Collectors.joining("\n"));

        // 3. Définir le "System Prompt" (Le rôle et le comportement de l'IA)
        String systemPrompt = """
            Tu es un conseiller commercial expert en automobile travaillant pour MIOLA Shop.
            Ton but est d'aider le client à trouver la voiture idéale parmi notre stock actuel.
            Voici notre inventaire actuel :
            {inventaire}
            
            Réponds à la demande du client en lui recommandant la ou les voitures les plus adaptées de notre inventaire. 
            Justifie ton choix avec des arguments de vente convaincants. Sois poli, professionnel et concis.
            Règle stricte : Ne propose jamais une voiture qui n'est pas dans la liste ci-dessus.
            """;

        // 4. Interroger Ollama via Spring AI
        return this.chatClient.prompt()
                .system(s -> s.text(systemPrompt).param("inventaire", inventaire))
                .user(questionClient)
                .call()
                .content();
    }
}
