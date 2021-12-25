import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Loading Page */}
      <div class = "w-screen h-screen bg-slate-900">

        <div class = "m-auto max-w-2xl"> 
          <h1 id = "title" class = "mx-auto">Gr- 
            <span class = "inline-flex">
                <img src = "/images/food.png"  class = ""></img>
            </span>
            -b
          </h1>

          <p id = 'title-2' class= "mx-auto">Hungry are we?</p>
        
        </div>

      </div>
    </div>
  );
}

export default App;
