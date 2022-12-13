import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import {FuelProvider} from "./contexts/FuelContext";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavLink, Container} from 'react-bootstrap';

function App() {
    return (
        <FuelProvider>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                        </Routes>
                    </Container>
                </div>
            </BrowserRouter>
        </FuelProvider>
    );
}
export default App;
