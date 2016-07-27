import pills from 'pills';
import ReactDom from 'react-dom';
import Pokedex from './components/pokedex'
import pokemons from '../root/pokedex.json';


ReactDom.render(
    <Pokedex pokemons={pokemons}/>,
    document.getElementById('app')
);
