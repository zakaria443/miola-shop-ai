import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import ChatAssistant from './components/ChatAssistant';
import VoitureListe from './components/VoitureListe'; // <-- 1. AJOUTE CET IMPORT ICI

function App() {
    return (
        <Router>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12} className="mt-4">
                        <Routes>
                            <Route path="/" element={
                                <div>
                                    <h2 className="text-center mt-5">Bienvenue sur le portail MIOLA Shop</h2>
                                    <p className="text-center">Utilisez le menu pour tester notre Assistant IA.</p>
                                </div>
                            } />

                            <Route path="/assistant" element={<ChatAssistant />} />

                            {/* 2. AJOUTE CETTE ROUTE POUR L'INVENTAIRE */}
                            <Route path="/voitures" element={<VoitureListe />} />

                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;