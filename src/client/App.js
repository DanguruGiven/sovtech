import React, { useState, useEffect } from 'react';

import Components from './components';
import { Typography1 } from './components/Typography';
import { SearchField } from './components/TextField';
import { Col, Col6 } from './components/Col';
import { CardItem } from './components/Card';
import axios from 'axios';

const Container = Components.Container;
const Row = Components.Row;

const App = () => {

    const [jokeCategories, setJokeCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCategories, setFilteredCategories] = useState([]);

    // const getJokes = () => {
    //     async () => {
    //         const results = await axios('https://api.chucknorris.io/jokes/categories');
    //         setJokes(results);
    //     }
    // };

    useEffect(async () => {
        const results = await axios('https://api.chucknorris.io/jokes/categories');
        setJokeCategories(results.data);
    }, [jokeCategories]);

    useEffect(() => {
        setFilteredCategories(
            jokeCategories.filter(jokeCategory => jokeCategory.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, jokeCategories]);
    
    return(
        <Container>
            <Row>
                <Col>
                    <Typography1>chuck Norris Jokes</Typography1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchField type="search" placeholder="Search a joke" onChange={ e => setSearch(e.target.value)} />
                </Col>
            </Row>
            {
                filteredCategories && filteredCategories.map((jokeCategory, i) => (
                    <Row key={i}>
                        <Col6>
                            <CardItem margin="10px auto" label={jokeCategory} />
                        </Col6>
                    </Row>
                ))
            }
        </Container>
    )
}

export default App;