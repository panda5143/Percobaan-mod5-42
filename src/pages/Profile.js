import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file for styling

export default function Profile() {
    const [indarProfile, setIndarProfile] = useState({ followers: 0, avatarUrl: '' });
    const [dhanustrProfile, setDhanustrProfile] = useState({ followers: 0, avatarUrl: '' });
    const [affanProfile, setAffanProfile] = useState({ followers: 0, avatarUrl: '' });
    const [prabaProfile, setPrabaProfile] = useState({ followers: 0, avatarUrl: '' });

    useEffect(() => {
        const fetchProfileData = async (username, setProfileState) => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();
                setProfileState({ followers: data.followers, avatarUrl: data.avatar_url });
            } catch (error) {
                console.error(`Error fetching profile data for ${username}:`, error);
            }
        };

        fetchProfileData('panda5143', setIndarProfile);
        fetchProfileData('dhanustr', setDhanustrProfile);
        fetchProfileData('kiiopasha', setAffanProfile); // Fetch data for Affan
        fetchProfileData('pruubie', setPrabaProfile); // Fetch data for Praba
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-card">
                <img 
                    src={indarProfile.avatarUrl || "https://static.promediateknologi.id/crop/0x5:800x598/0x0/webp/photo/p2/222/2024/08/14/3-63818274.jpg"} 
                    alt="Indar Hafian Profile" 
                    className="profile-image" 
                />
                <h1 className="profile-name">
                    <a href="https://github.com/panda5143" target="_blank" rel="noopener noreferrer">
                        Indar Hafian
                    </a>
                </h1>
                <p className="profile-bio">enak turu!!!</p>
                <div className="profile-info">
                    <p><strong>Email:</strong> Awoakawok@gmail.com</p>
                    <p><strong>Location:</strong> Semarang, Indonesia</p>
                    <p><strong>Interests:</strong> Movies, Technology, Music, Traveling</p>
                    <p><strong>Followers:</strong> {indarProfile.followers}</p>
                </div>
            </div>

            <div className="profile-card">
                <img 
                    src={dhanustrProfile.avatarUrl || "https://example.com/fallback-avatar.jpg"} 
                    alt="Dhanustr Profile" 
                    className="profile-image" 
                />
                <h1 className="profile-name">
                    <a href="https://github.com/dhanustr" target="_blank" rel="noopener noreferrer">
                        DHANU SATRIA ATMAJA
                    </a>
                </h1>
                <p className="profile-bio">pepatah berkata "patah"</p>
                <div className="profile-info">
                    <p><strong>Email:</strong> Dhanu.kesatria@gmail.com</p>
                    <p><strong>Location:</strong> Semarang, Indonesia</p>
                    <p><strong>Interests:</strong> Open Source, Coding, AI</p>
                    <p><strong>Followers:</strong> {dhanustrProfile.followers}</p>
                </div>
            </div>

            <div className="profile-card">
                <img 
                    src={affanProfile.avatarUrl || "https://example.com/fallback-avatar.jpg"} 
                    alt="Muhammad Affan Pasha Profile" 
                    className="profile-image" 
                />
                <h1 className="profile-name">
                    <a href="https://github.com/kiiopasha" target="_blank" rel="noopener noreferrer">
                        MUHAMMAD AFFAN PASHA
                    </a>
                </h1>
                <p className="profile-bio">2 3 beli sekop, ayo ke bioskop</p>
                <div className="profile-info">
                    <p><strong>Email:</strong> dhanu.kesatria@gmail.com</p>
                    <p><strong>Location:</strong> Semarang, Indonesia</p>
                    <p><strong>Interests:</strong> Open Source, Coding, AI</p>
                    <p><strong>Followers:</strong> {affanProfile.followers}</p>
                </div>
            </div>

            <div className="profile-card">
                <img 
                    src={prabaProfile.avatarUrl || "https://example.com/fallback-avatar.jpg"} 
                    alt="Prabaswara Nasywa Maharani Profile" 
                    className="profile-image" 
                />
                <h1 className="profile-name">
                    <a href="https://github.com/pruubie" target="_blank" rel="noopener noreferrer">
                        PRABASWARA NASYWA MAHARANI
                    </a>
                </h1>
                <p className="profile-bio">2 3 ikan diangkasa, mana bisa</p>
                <div className="profile-info">
                    <p><strong>Email:</strong> dhanu.kesatria@gmail.com</p>
                    <p><strong>Location:</strong> Semarang, Indonesia</p>
                    <p><strong>Interests:</strong> Open Source, Coding, AI</p>
                    <p><strong>Followers:</strong> {prabaProfile.followers}</p>
                </div>
            </div>
        </div>
    );
}
