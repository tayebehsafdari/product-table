import './App.scss';

import {Container} from 'react-bootstrap';
import Clock from "./Clock";


function App() {
    return (
        <div className="App">
            <Container>
                <Clock/>
            </Container>
        </div>
    );
}

export default App;
