import {useState, useContext} from 'react';
import { Form, Button, Container, FormLabel, FormGroup, FormControl} from 'react-bootstrap'
import FuelContext from "./contexts/FuelContext";
import {searchSites} from "./contexts/FuelActions";

function Search() {
    const [text, setText] = useState('');

    const {sites, dispatch} = useContext(FuelContext);

    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const sites = await searchSites(text);
        dispatch({ type: 'GET_SITES', payload: sites})

    }

    return (
          <Form onSubmit={handleSubmit}>
                <Form.Group>
                     <Form.Control onChange={handleChange} type="text" placeholder="Search Sites by name, town (Leeds), postcode" ></Form.Control>
                </Form.Group>
                <Button type="submit">Search</Button>
           </Form>
    )
}

export default Search;
