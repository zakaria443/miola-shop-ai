import React from 'react';
import './App.css';
// 1. On importe Routes au lieu de Switch
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import ChatAssistant from './components/ChatAssistant';

function App() {
    return (
        <Router>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12} className="mt-4">
                        {/* 2. On utilise Routes pour envelopper nos Route */}
                        <Routes>

                            {/* 3. On utilise "element={<Composant />}" au lieu de "component={Composant}" */}
                            <Route path="/" element={
                                <div>
                                    <h2 className="text-center mt-5">Bienvenue sur le portail MIOLA Shop</h2>
                                    <p className="text-center">Utilisez le menu pour tester notre Assistant IA.</p>
                                </div>
                            } />

                            <Route path="/assistant" element={<ChatAssistant />} />
                            {/* On ajoutera la route /voitures plus tard */}

                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;