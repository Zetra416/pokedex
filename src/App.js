import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const itemsPerPage = 15; // Adjust the number of items per page as needed
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPokemon, setTotalPokemon] = useState(0);

  useEffect(() => {
    // Fetch total number of Pokémon from your API or data source
    // For example, if you have a function getPokemonCount, you can call it like getPokemonCount().then(count => setTotalPokemon(count));
    // For now, setting a static total Pokemon count.
    setTotalPokemon(150);
  }, []);

  const totalPages = Math.ceil(totalPokemon / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const pokeId = () => {
    let pokemon = [];
    for (let i = startIndex + 1; i <= endIndex && i <= totalPokemon; i++) {
      pokemon.push(
        <div key={i} className="col-md-4 mb-3">
          <PokeCard id={i} />
        </div>
      );
    }
    return pokemon;
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <h1>Welcome to Pokedex!</h1>
      <h4>Click the cards to see more detail!</h4>
      <div className="row">
        {pokeId()}
      </div>
      <div className="pagination text-center mb-3">
        <button
          className="btn btn-primary mr-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-info">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="btn btn-primary ml-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
