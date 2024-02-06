import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormationList = () => {
    const [formations, setFormations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/formations')
            .then(response => setFormations(response.data))
            .catch(error => console.error('Erreur lors de la requête API :', error));
           
    }, []);
    

    return (
        <div>
            
            <h2>Liste des formations</h2>
            <ul>
                {formations.map(formation => (
                    <li key={formation.codeFormation}>{formation.codeFormation}</li>
                ))}
            </ul>
        </div>
    );
};

export default FormationList;