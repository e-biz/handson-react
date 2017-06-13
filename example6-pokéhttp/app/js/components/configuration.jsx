import classNames from 'classnames';
import React, {PropTypes} from 'react';
import {browserHistory, IndexRoute, Router,  Route, Link} from 'react-router';
import Pokedex from './pokedex';
import PokemonNotFound from './pokemon-not-found';
import TypeTable from './type-table';
import TypeDescription from './type-description';

const App = props => {

    const classNameHome = classNames({
        'nav-item is-tab': true,
        'is-active': props.location.pathname === '/'
    });

    const classNameType = classNames({
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

App.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    location: PropTypes.object
};

const PokeRouter = (
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