import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home_page/HomePage";
import PokemonProfil from "./components/pokemon_profil/PokemonProfil";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pokemon/profil/:pokemon" component={PokemonProfil} />
      </Switch>
    </div>
  );
}
