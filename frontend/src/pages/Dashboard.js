// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';


const Dashboard = () => {
    
    const [titles, setTitles] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    const fetchTitles = async () => {
        const response = await fetch('http://localhost:8000/titles', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Add JWT token
            },
        });
        const data = await response.json();
        setTitles(data);
    };

    const handleAddTitle = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/titles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Add JWT token
            },
            body: JSON.stringify({ title: newTitle }),
        });

        if (response.ok) {
            setNewTitle('');
            fetchTitles(); // Refresh titles after adding a new one
        } else {
            alert('Failed to add title!');
        }
    };

    const handleDeleteTitle = async (id) => {
        const response = await fetch(`http://localhost:8000/titles/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Add JWT token
            },
        });

        if (response.ok) {
            fetchTitles(); // Refresh titles after deletion
        } else {
            alert('Failed to delete title!');
        }
    };

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.error('Error connecting to wallet:', error);
            }
        } else {
            alert('MetaMask not detected. Please install MetaMask.');
        }
    };

    useEffect(() => {
        fetchTitles();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={connectWallet}>Connect MetaMask Wallet</button>
            {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
            <h2>Add New Title</h2>
            <form onSubmit={handleAddTitle}>
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                />
                <button type="submit" disabled={!walletAddress}>Add Title</button>
            </form>
            <h2>Titles List</h2>
            <ul>
                {titles.map((title) => (
                    <li key={title.id}>
                        {title.title}
                        <button onClick={() => handleDeleteTitle(title.id)} disabled={!walletAddress}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
