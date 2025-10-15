import './App.css';

function App() {
  return (
    <div>
      <h1 id= "mainPageTitle">Blackjack</h1>

      <label
      id="enterGameNameTitle" 
      for="nom de partie">
        Nom de Partie</label>

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

      <label
      id="playerName" 
      for="playerName">
        Nom du joueur
        </label>

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


    <label 
      id = "listeDesJoueursEnregistrés" >
      Liste des joueurs enregistrés
    </label>

    <label>Liste de joueurs à mettre à jour à chaque ajout à partir de la bdd</label>
    </div>
  );
}

export default App;