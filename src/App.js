import Header from './components/Header';
import './App.css';
import Movie from './components/Movie';
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          data.map((element) =>{
            return(
              <Movie 
                Title = {element.Title} 
                Year = {element.Year}
                img = {element.Poster}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
