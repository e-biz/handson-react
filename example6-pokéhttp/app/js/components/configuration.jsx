import classNames from 'classnames';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Pokedex from './pokedex';
import PokemonNotFound from './pokemon-not-found';
import TypeTable from './type-table';
import TypeDescription from './type-description';

const App = props => {

    const classNameHome = classNames({
        'nav-item is-tab': false,
        'is-active': false
    });

    const classNameType = classNames({
        'nav-item is-tab': false,
        'is-active': false
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

App.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

const PokeRouter = null; //Here define routes of the application

export {App, PokeRouter};