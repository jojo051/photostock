import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenue sur mon gestionnaire d'images</h1>
            <div><Link to="/upload">Envoyer images</Link></div>
            <div><Link to="/view">Visioner images</Link></div>
            <div><Link to="/delete">Suprimer images</Link></div>
        </div>
    );
};

export default Home;