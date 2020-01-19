import React from 'react';

import db from '../firebaseConfig';

const Home = () => {
    const handleSignOut = () => db.auth().signOut();
    return (
        <>
            <h1>Home</h1>
            <button
                onClick={handleSignOut}
            >
                Sign Out
            </button>
        </>
    )
};

export default Home;