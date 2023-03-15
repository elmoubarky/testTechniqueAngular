import { useState } from 'react'
import './App.css';
import Loader from './components/loader/Loader';
import Button from './components/button/Button';

function App() {

  const VALEUR_INITIALE = [
    {
      titre: 'Initialisation du test technique',
      progression: 50,
    },
    {
      titre: 'Avancement de la phase de développement',
      progression: 25,
    }
  ];

  const [loaders, setLoaders] = useState(VALEUR_INITIALE)

  function remettreAZero(e) {
    e.preventDefault();
    let newValue = VALEUR_INITIALE;
    newValue.forEach(val => val.progression = 0);
    setLoaders(newValue);
  }

  function augmenterProgression(progressionAjouter) {
    setLoaders(loaders.map(loader => {
      if(loader.progression + progressionAjouter <= 100) {
        loader.progression += progressionAjouter;
      }
      return loader;
    }));
  }

  return (
    <div className="App">
      <div className="titre-container">
        <span className="titre">Test technique WEB-ATRIO réalisé par DJOMAN Fidele</span>
        <span className='titre'>réalisé le 15/03/2023</span>
      </div>
      <div className='loaders-container'>
        {loaders.map((loader, index) => <Loader key={index} titre={loader.titre} progression={loader.progression}></Loader>)}
      </div>
      <div className='button-row'>
        <Button onClick={remettreAZero} text="Remettre à zéro les compteurs"></Button>
        <Button onClick={ () => augmenterProgression(5)} text="Ajouter 5%"></Button>
        <Button onClick={ () => augmenterProgression(10)} text="Ajouter 10%"></Button>
      </div>
    </div>
  );
}

export default App;
