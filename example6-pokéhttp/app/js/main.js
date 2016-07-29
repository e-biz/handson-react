import bulma from 'bulma';
import ReactDom from 'react-dom';
import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import classNames from 'classnames';
import Pokedex from './pokedex'
import PokemonNotFound from './components/pokemon-not-found';
import TypeTable from './components/type-table';
import TypeDescription from './components/type-description';

const App = props => {
    let classNameHome = classNames({
        'nav-item is-tab': true,
        'is-active': props.location.pathname === '/'
    });

    let classNameType = classNames({
        'nav-item is-tab': true,
        'is-active': props.location.pathname === '/type'
    });
    return (
        <div>
            <nav className="nav has-shadow poke-nav">
                <div className="nav-left">
                    <Link className={classNameHome} to="/#">List of Pokemon</Link>
                    <Link className={classNameType} to="/type">Type of Pokemon</Link>
                </div>
            </nav>
            {props.children}
        </div>
    );
};

ReactDom.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Pokedex}/>
                <Route path="/type" component={TypeTable} />
                <Route path="/type/:typeName" component={TypeDescription} />
                <Route path="*" component={PokemonNotFound}/>
            </Route>
        </Router>
    ), document.getElementById('app')
);