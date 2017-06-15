# Hand on React - PokéHttp

## Requirements
Example5 done.

## Expected results
A bit more complex pokédex.

## Goals
- Add functional complexity in our App.
- Use React-router.
- Use superagent.

## Documentation
- [React-router](https://github.com/reactjs/react-router)
- [superagent](https://github.com/visionmedia/superagent)
- [pokéapi](https://pokeapi.co/)
- [react progress 2](https://github.com/milworm/react-progress-2)

## Instructions

1. Install `react-router@2.8.1` as dependency.
2. Install `superagent` as dependency.

3. Create PokemonNotFound stateless functions component:
    1. This component render a `div` with the text `Nothing to see here !` and a picture of the Team Rocket.
    2. Test your component with `npm run test:NotFound`.
    
4. Fill the `PokeApi` service:
    1. Create a types function that use Superagent to get all pokemon types. This function takes two callback `success` and `error`.
    2. Create a type function that use Superagent to get a specific type (with it's type name as parameter). This function takes three argument the name of type and two callback `success` and `error`.
    3. Create an abort function that abort the 'in progress request' if this request exist otherwise it throws an error (`Cannot abort the request because it does not exist`).
    4. Test your service with npm `run test:pokeapi`.
    
5. Fill the TypeDescription component:
    1. Initialize the component with a new `PokeApi` and with an object in the state named type.
    2. Create a method `componentDidMount` that use Pokeapi to retrieve a specific Pokemon type regarding the type name in props and add it in the state.
    3. Create a method `componentWillUnmount` that abort the request to the pokeapi in a try/catch.
    4. Fill the render method with the types previously retrieved and with the name of the type.
    5. Test your component with `npm run test:description`.

6. Fill the `TypeTable` component:
    1. Initialize the component with a new `PokeApi` and with an object in the state named types.
    2. Create a method `componentDidMount` that use Pokeapi to retrieve all types of a Pokemon and add it in the state.
    3. Create a method `componentWillUnmount` that abort the request to the pokeapi in a try/catch.
    4. In the render method, map the list of types (in the state of the comp) into a list of rows (`<tr>`, `<td>`). Put the index of the type in first cell.
    5. In the second cell, add a component of from `react-router` Link, with a property named `to` and as a property value the concatenation of `/type/` and the type name of the pokemon. 
    6. Test your component with `npm run test:description`.

7. Modify the `PokemonDescription` component:
    1. Replace the type name of the pokemon, in the description, with a Link component from `react-router`.
    2. Put in `to` parameter of this component the concatenation of `/type/` and the type name of the pokemon.
    3. Put as child of the component the type name of the pokemon.
    4. Test your component with `npm run test:pokedescription`.

8. Fill the `configuration.js` file:
    1. Create a stateless function component named `App` which takes props and render a `<nav>`.
    2. This `<nav>` contains two link to `/#` and `/type` they contains className to `is-active` only when `props.location.pathname` is equal to the path.
    3. Create a `Router` component that contains a `Route` component to `/`.
    4. The Route component contains an `IndexRoute` component and 3 sub-`Route` to `/type`, `/type/:typeName` and `*`.
    5. Test your component with `npm run test:configuration`.

## Bonus
use React-Progress-2 in order to show a progress bar when loading data from pokéapi.
