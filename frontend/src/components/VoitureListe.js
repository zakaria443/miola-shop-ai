import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const VoitureListe = () => {
    const [voitures, setVoitures] = useState([]);

    useEffect(() => {
        // On interroge notre backend Dockerisé sur le port 9090
        axios.get("http://localhost:9090/api/voitures")
            .then(response => {
                // Spring Data Rest met les tableaux dans un objet _embedded
                if (response.data._embedded && response.data._embedded.voitures) {
                    setVoitures(response.data._embedded.voitures);
                }
            })
            .catch(error => {
                console.error("Erreur lors du chargement des voitures:", error);
            });
    }, []);

    return (
        <Card className="border border-dark bg-dark text-white mt-4">
            <Card.Header>
                <FontAwesomeIcon icon={faList} /> Liste des Voitures (Inventaire)
            </Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Modèle</th>
                        <th>Couleur</th>
                        <th>Immatricule</th>
                        <th>Année</th>
                        <th>Prix (DH)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {voitures.length === 0 ? (
                        <tr align="center">
                            <td colSpan="6">Chargement ou aucune voiture disponible...</td>
                        </tr>
                    ) : (
                        voitures.map((voiture, index) => (
                            <tr key={index}>
                                <td>{voiture.marque}</td>
                                <td>{voiture.modele}</td>
                                <td>{voiture.couleur}</td>
                                <td>{voiture.immatricule}</td>
                                <td>{voiture.annee}</td>
                                <td>{voiture.prix}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default VoitureListe;