import React, { useState } from 'react';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot } from '@fortawesome/free-solid-svg-icons';

const ChatAssistant = () => {
    const [question, setQuestion] = useState('');
    const [reponse, setReponse] = useState('');
    const [loading, setLoading] = useState(false);

    const poserQuestion = (e) => {
        e.preventDefault();
        setLoading(true);
        setReponse('');

        // Appel à notre API Spring Boot sur le port 9090
        axios.get(`http://localhost:9090/api/chat?message=${question}`)
            .then(res => {
                setReponse(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setReponse("Désolé, une erreur de connexion à l'assistant est survenue.");
                setLoading(false);
            });
    };

    return (
        <Card className="border border-dark bg-dark text-white mt-4">
            <Card.Header>
                <FontAwesomeIcon icon={faRobot} /> Conseiller Commercial IA
            </Card.Header>
            <Card.Body>
                <Form onSubmit={poserQuestion}>
                    <Form.Group controlId="formQuestion">
                        <Form.Label>Décrivez votre véhicule idéal :</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Ex: Je cherche une voiture familiale rouge pour moins de 100 000 DH..."
                            className="bg-light"
                            required
                        />
                    </Form.Group>
                    <Button variant="success" type="submit" className="mt-3" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : <FontAwesomeIcon icon={faPaperPlane} />}
                        {loading ? ' Analyse en cours...' : ' Demander conseil'}
                    </Button>
                </Form>

                {reponse && (
                    <div className="mt-4 p-3 bg-secondary rounded text-light">
                        <h5>Réponse de l'expert :</h5>
                        <p style={{ whiteSpace: 'pre-wrap' }}>{reponse}</p>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default ChatAssistant;