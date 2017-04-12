import classNames from 'classnames';
import React, {PropTypes} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Pokedex from './pokedex';
import PokemonNotFound from './pokemon-not-found';
import TypeTable from './type-table';
import TypeDescription from './type-description';

const App = ({ match }) => {

    let classNameHome = classNames({
        'nav-item is-tab': true,
        'is-active': match.url === '/'
    });

    let classNameType = classNames({
        'nav-item is-tab': true,
        'is-active': match.url === '/type'
    });
    return (
        <div>
            <nav className="nav has-shadow poke-nav">
                <div className="nav-left">
                    <Link className={classNameHome} to="/#">List of Pokemon</Link>
                    <Link className={classNameType} to="/type">Type of Pokemon</Link>
                </div>
            </nav>
            <Route exact path="/" component={Pokedex}/>
            <Route path="/type" component={TypeTable}/>
            <Route path="/type/:typeName" component={TypeDescription}/>
        </div>
    );
};

App.propTypes = {
    match: PropTypes.object
};

const PokeRouter = (
    <Router>
      <div>
        <Route path='/' component={App} />
        <Router path='*' component={PokemonNotFound} />
      </div>
    </Router>
);

export {App, PokeRouter};