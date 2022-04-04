import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "../home/index"

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<Home />} />
                <Route path='/projects' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Rotas;