import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Loading Page */}
      <div class = "w-screen h-screen bg-zinc-900 flex items-center">

        <div class = "mx-auto flex flex-col items-center"> 
          <p id = "title" class = "animate-pulse tracking-tighter text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-fuchsia-700">GR-UH
            {/* <span class = "inline-flex self-center">
                <img src = "/images/food.png"  class = "h-8 w-8"></img>
            // </span> */}
            -B
          </p>

          <p id = 'title-2' class= "mx-auto mt-1 text-xl text-neutral-300 tracking-widest">Hungry are we?</p>
        
        </div>

      </div>
    </div>
  );
}

export default App;
