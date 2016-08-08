import classNames from "classnames";
import React, {Component} from "react";
import {Router, Route, Link, browserHistory, IndexRoute} from "react-router";
import Pokedex from "./pokedex";
import PokemonNotFound from "./pokemon-not-found";
import TypeTable from "./type-table";
import TypeDescription from "./type-description";

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

let PokeRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Pokedex}/>
            <Route path="/type" component={TypeTable}/>
            <Route path="/type/:typeName" component={TypeDescription}/>
            <Route path="*" component={PokemonNotFound}/>
        </Route>
    </Router>
);

export {App, PokeRouter};