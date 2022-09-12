import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenue sur mon gestionnaire d'images</h1>
            <div><Link to="/upload">envoyer image</Link></div>
            <div><Link to="/view">visioner image</Link></div>
            <div><Link to="/delete">suprimer image</Link></div>
        </div>
    );
};

export default Home;