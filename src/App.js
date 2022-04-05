import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import AllProjects from './containers/AllProjects';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<Home />}
                    key='route-home-screen'
                />
                <Route
                    path='/projects'
                    exact
                    element={<AllProjects />}
                    key='route-projects-screen'
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
