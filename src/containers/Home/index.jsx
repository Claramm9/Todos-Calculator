import React from 'react';
import './styles.css';
import Header from './Header';
import Todos from '../Todos';
import Calculator from '../Calculator';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => (
    <Router>
        <div>
            <Header />
            <div>
                <Route path="/todos" component={Todos} />
                <Route path="/calculator" component={Calculator} />
            </div>
        </div>
    </Router>
);

export default Home;
