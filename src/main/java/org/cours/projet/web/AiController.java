package org.cours.projet.web;

import org.cours.projet.service.AiConseillerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Crucial pour autoriser React à faire des requêtes
public class AiController {

    private final AiConseillerService aiConseillerService;

    public AiController(AiConseillerService aiConseillerService) {
        this.aiConseillerService = aiConseillerService;
    }

    @GetMapping("/chat")
    public String chat(@RequestParam String message) {
        return aiConseillerService.conseillerClient(message);
    }
}
