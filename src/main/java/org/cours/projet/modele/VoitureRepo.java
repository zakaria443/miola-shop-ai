package org.cours.projet.modele;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000") // AUTORISE REACT À LIRE LES DONNÉES

@RepositoryRestResource
public interface VoitureRepo extends CrudRepository<Voiture, Long> {
}
