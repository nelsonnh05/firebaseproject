import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { db } from '../firebaseConfig';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import logo from '../photos/LogoJOBLANC.png';
import menuIcon from '../photos/MENUBLANC.png';


export default function AdminScreen() {
    const [players, setPlayers] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const getPlayers = async () => {
        const querySnapshot = await getDocs(collection(db, "players"));
        const playerListCopy = [];

        for (const doc of querySnapshot.docs) {
            const player = { id: doc.id, ...doc.data() };
            if (player.imageName) {
                const imageUrl = await loadImage(player.imageName);
                player.imageUrl = imageUrl;
            }
            playerListCopy.push(player);
        }

        setPlayers(playerListCopy);
    };

    const loadImage = async (imageName) => {
        const storage = getStorage();
        const imageRef = ref(storage, `images/${imageName}`);
        try {
            return await getDownloadURL(imageRef);
        } catch (error) {
            console.error('Error loading image:', error);
            return null;  // ou une URL d'image par défaut si nécessaire
        }
    };

    useEffect(() => {
        getPlayers();
    }, []);

    const deletePlayer = async (id) => {
        try {
            await deleteDoc(doc(db, "players", id));
            const updatedPlayers = players.filter(player => player.id !== id);
            setPlayers(updatedPlayers);
        } catch (error) {
            console.error('Error deleting player:', error);
        }
    };

    const handleEditChange = (playerId, field, value) => {
        setPlayers(players.map(player => {
            if (player.id === playerId) {
                return { ...player, [field]: value };
            }
            return player;
        }));
    };

    const savePlayer = async (player) => {
        const playerRef = doc(db, "players", player.id);
        try {
            await setDoc(playerRef, player);
            setEditingId(null);  // Quitter le mode édition
        } catch (error) {
            console.error('Error saving player:', error);
        }
    };

    const displayPlayers = () => {
        return players.map((player, key) => (
            <tr key={key}>
                {editingId === player.id ? (
                    <>
                        <td><input value={player.name} onChange={e => handleEditChange(player.id, 'name', e.target.value)} /></td>
                        <td><input value={player.age} onChange={e => handleEditChange(player.id, 'age', e.target.value)} /></td>
                        <td><input value={player.position} onChange={e => handleEditChange(player.id, 'position', e.target.value)} /></td>
                        <td><input value={player.club} onChange={e => handleEditChange(player.id, 'club', e.target.value)} /></td>
                        <td><input value={player.numero} onChange={e => handleEditChange(player.id, 'numero', e.target.value)} /></td>
                        <td><StyledButton onClick={() => savePlayer(player)}>Sauvegarder</StyledButton></td>
                    </>
                ) : (
                    <>
                        <td>{player.name}</td>
                        <td>{player.age}</td>
                        <td>{player.position}</td>
                        <td>{player.club}</td>
                        <td>{player.numero}</td>
                        <td>
                            {player.imageUrl ? <img src={player.imageUrl} alt={`${player.name}`} width="100" /> : 'Pas d\'image'}
                        </td>
                        <td>
                            <StyledButton onClick={() => setEditingId(player.id)}>Modifier</StyledButton>
                            <StyledButton onClick={() => deletePlayer(player.id)}>Supprimer</StyledButton>
                        </td>
                    </>
                )}
            </tr>
        ));
    };

    return (
        <StyledContainer>
            <img src={logo} alt="Logo" className="logo" />
            <div className="menu-container">
                <img src={menuIcon} alt="Menu" className="menu-icon" />
                <div className="menu">
                    <Link to="/">Accueil</Link>
                </div>
            </div>
            <StyledTitle>Admin Screen</StyledTitle>
            <StyledTable className='player-table'>
                <thead>
                    <tr>
                        <th>Nom/Prénom</th>
                        <th>Âge</th>
                        <th>Position</th>
                        <th>Club</th>
                        <th>Numéro</th>
                        <th>Joueur</th>
                    </tr>
                </thead>
                <tbody>
                    {displayPlayers()}
                </tbody>
            </StyledTable>
        </StyledContainer>
    );
};

// Css styled components

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const StyledTitle = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 2rem;
    color: gold;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
`;

const StyledTable = styled.table`
    width: 80%;  
    border-collapse: collapse;

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        color: gold;
        background-color: black;
    }

    th {
        background-color: #222;
        text-align: left;
    }
`;

const StyledButton = styled.button`
    background-color: black;
    color: gold;
    border: 1px solid gold;
    border-radius: 0.5em;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: gold;
        color: black;
        border-color: black;
    }
`;
