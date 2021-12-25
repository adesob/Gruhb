import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Loading Page */}
      <div class = "w-screen h-screen bg-black flex items-center">

        <div class = "mx-auto border border-red-700 flex flex-col items-center"> 
          <p id = "title" class = "text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-fuchsia-600">GR-UH
            {/* <span class = "inline-flex self-center">
                <img src = "/images/food.png"  class = "h-8 w-9"></img>
            </span> */}
            -B
          </p>

          <p id = 'title-2' class= "mx-auto mt-2 text-2xl text-white">Hungry are we?</p>
        
        </div>

      </div>
    </div>
  );
}

export default App;
