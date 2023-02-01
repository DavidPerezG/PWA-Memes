import React, {useState} from 'react';
import logo from './logo.svg';
import image from './imas.jpg'
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [lineaOne, setLineaOne] = useState('');
  const [lineaTwo, setLineaTwo] = useState('');
  const [imagen, setImagen] = useState('futurama');

  const handleOnChangeOne = (event) => {
    console.log(lineaOne)
    setLineaOne(event.target.value);
  }

  const handleOnChangeTwo = (event) => {
    setLineaTwo(event.target.value);
  }

  const handleOnChangeImage = (event) => {
    setImagen(event.target.value);
    console.log(event.target.value);
  }

  const handleExport = (event) => {
    alert("Export");
    event.preventDefault();
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas)
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div className='Column'>
            {/* <select onChange={handleOnChangeImage}>
              <option value="fire">Casa en Llamas</option>
              <option value="futurama">Futurama</option>
              <option value="history">History Channel</option>
              <option value="matrix">Matrix</option>
              <option value="philosoraptor">Philosoraptor</option>
              <option value="smart">Smart Guy</option>
            </select> <br />

            <input onChange={handleOnChangeOne} type="text" placeholder="Linea 1" /> <br />
            <input onChange={handleOnChangeTwo} type="text" placeholder="Linea 2" /> <br />
            <button onClick={handleExport}>Exportar</button>

            <div className='meme' id='meme'>
              <span className='text1'>{lineaOne}</span>
              <br />
              <span className='text2'>{lineaTwo}</span> 
              <img className='memeImage' src={"/assets/" + imagen + ".jpg"}/>
            </div> */}

            <input type="text" placeholder="Correo" /> <br />
            <input type="password" placeholder="Contraseña" /> <br />
            <button>Login</button>

            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}


export default App;
