import './styles.css';
import React from 'react';
import Todos from '../Todos';
import Header from './Header';
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
