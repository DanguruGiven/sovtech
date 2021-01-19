import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Route, Switch, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getError, getLoading, getJokeLoading, getJokeError, getJoke, getCategories } from '../store/actions';

import Components from './components';
import { Typography1 } from './components/Typography';
import { SearchField } from './components/TextField';
import { Col, Col12, ColR } from './components/Col';
import { CardItem, Card } from './components/Card';

const Container = Components.Container;
const Row = Components.Row;

//gql categories query
const GET_CATEGORIES = gql`
{
    categories
}
`

//gql query for jokes
const GET_JOKE = gql`
    query($category: String!){
        joke(category: $category) {
            icon_url
            value
        }
    }
`

//Component to display the joke
const JokeDetails = () => {

    let { category } = useParams();

    const { loading, error, data } = useQuery(GET_JOKE, { variables: {category} })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJokeLoading(loading))
        dispatch(getJokeError(error))
        dispatch(getJoke(data))
    })
    

    if (error) return <h4>Something went wrong</h4>
    
    if (loading) return <h4>Loading....</h4>

    return(
        <Container>
            <Row>
                <Col>
                    <Card src={data.joke.icon_url} text={data.joke.value} />
                </Col>
            </Row>
        </Container>
    )
}

//Main component that show the list of categories
const App = () => {

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    //Dispatch Hook
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [filteredCategories, setFilteredCategories] = useState([]);


    //UseEffect to dispatch actions from redux
    useEffect(() => {
        dispatch(getCategories(data.categories))
        dispatch(getLoading(loading))
        dispatch(getError(error))
    })

    //UseEffect to filter data for search
    useEffect(() => {
        setFilteredCategories(
            data.categories.filter(category => category.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, filteredCategories, data.categories])

    if (error) return <h4>Something went wrong</h4>
    if (loading) return <h4>Loading....</h4>
    
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
            <Row>
                <ColR>
                    {
                        filteredCategories && filteredCategories.map((jokeCategory, i) => (
                            <Row key={i}>
                                <Col12>
                                    <CardItem margin="10px auto" label={jokeCategory} to={`/joke/${jokeCategory}/random`} />
                                </Col12>
                            </Row>
                        ))
                    }
                </ColR>
                <ColR>
                    <Switch>
                        <Route exact path="/joke/:category/random" children={<JokeDetails/>}></Route>
                    </Switch>
                </ColR>
            </Row>
        </Container>
    )
}

export default App;