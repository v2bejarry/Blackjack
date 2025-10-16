import './App.css';

function App() {
  return (
    <div>
      <h1 
      id= "mainPageTitle">
      Blackjack
      </h1>
    <div>
      <div>
        <label
          id="enterGameNameTitle" 
          for="nom de partie">
          Nom de Partie
        </label>
      </div>
      <textarea 
        id="enterGameName" 
        placeholder="Ecrivez le nom de votre partie" 
        name = "écrivez votre question"   
        rows={4} 
        cols={35}>
      </textarea>

      <button
        id = "bonttonConfirmerNomPartie">
        confirmer
      </button>
    </div>

    <div>
      <div><label
        id="playerName" 
        for="playerName">
        Nom du joueur
      </label>
    </div>
      <textarea 
        id="addNewPlayer" 
        placeholder="Ajouter le nom du joueur" 
        name = "écrivez votre question"   
        rows={4} 
        cols={35}>
      </textarea>

      <button 
        id = "boutonConfirmerJoueurs">
        confirmer
      </button>
    </div>

      <label 
        id = "listeDesJoueursEnregistrés" >
        Liste des joueurs enregistrés
      </label>

      <div>
        <label>
          Emplacment du tableau
        </label>
      </div>

      <div>
        <button id = "lunchGameButton">
          Lancer la partie
        </button>
      </div>
    </div>
  );
}

export default App;