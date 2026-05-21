package org.cours.projet;

import org.cours.projet.modele.Proprietaire;
import org.cours.projet.modele.ProprietaireRepo;
import org.cours.projet.modele.Voiture;
import org.cours.projet.modele.VoitureRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjetApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjetApplication.class, args);
    }

    // La méthode est maintenant bien placée à l'intérieur de la classe
    @Bean
    CommandLineRunner initDatabase(VoitureRepo voitureRepo, ProprietaireRepo proprietaireRepo) {
        return args -> {
            // On ajoute deux propriétaires
            Proprietaire prop1 = new Proprietaire("Ali", "Hassan");
            Proprietaire prop2 = new Proprietaire("Najat", "Bani");
            proprietaireRepo.save(prop1);
            proprietaireRepo.save(prop2);

            // On ajoute des voitures dans l'inventaire
            voitureRepo.save(new Voiture("Toyota", "Corolla", "Grise", "A-1-9090", 2018, 95000, prop1));
            voitureRepo.save(new Voiture("Ford", "Fiesta", "Rouge", "A-2-8090", 2015, 90000, prop1));
            voitureRepo.save(new Voiture("Honda", "CRV", "Bleu", "A-3-7090", 2016, 140000, prop2));
            voitureRepo.save(new Voiture("Dacia", "Duster", "Noir", "B-4-1020", 2022, 120000, prop2));

            System.out.println("✅ Base de données initialisée avec succès !");
        };
    }

} // L'accolade de la classe se ferme bien ici