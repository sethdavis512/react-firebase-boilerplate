import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

import db from '../firebaseConfig';

const Home = () => {
    const handleSignOut = () => db.auth().signOut();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const store = db.firestore();
            const querySnapshot = await store.collection('products').get();
            const data = querySnapshot.docs.map(doc => doc.data());
            setItems(data);
        };

        fetch();
    }, []);

    return (
        <Wrapper>
            <h1 className="title is-1">Home</h1>
            {JSON.stringify(items)}
            <Button handleClick={handleSignOut} text="Sign Out" />
        </Wrapper>
    );
};

export default Home;
