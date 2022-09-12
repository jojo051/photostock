import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <h1>Bienvenue sur mon gestionnaire d'images</h1>
            <div className='btn-link'><Link className='link' to="/upload">Envoyer images</Link></div>
            <div className='btn-link'><Link className='link' to="/view">Visioner images</Link></div>
            <div className='btn-link'><Link className='link' to="/delete">Suprimer images</Link></div>
        </div>
    );
};

export default Home;