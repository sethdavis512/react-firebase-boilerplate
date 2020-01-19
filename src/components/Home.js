import React from 'react';
import Button from '../components/Button';

import db from '../firebaseConfig';

const Home = () => {
    const handleSignOut = () => db.auth().signOut();
    return (
        <>
            <h1 className="title is-1">
                Home
            </h1>
            <Button
                handleClick={handleSignOut}
                text="Sign Out"
            />
        </>
    )
};

export default Home;