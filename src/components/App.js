import './App.scss';

import {Container} from 'react-bootstrap';
import Calculator from "./Calculator";

function App() {
    return (
        <div className="App">
            <Container>
                <Calculator/>
            </Container>
        </div>
    );
}

export default App;
