
import './App.css'
import Cartas from './components/carta'

function App() {
  const mostrarCarta = (num: number, pinta:string) =>{
    alert(`carta ${num} y de pinta ${pinta}`);
  }
  return (
    <div>
    <h1>
     Tatiana Medina
    </h1>
    <p> 20208  </p>
    <Cartas num={1} pinta="❤️" mostrarCarta={mostrarCarta}/>
     <Cartas num={11} pinta="💎"mostrarCarta={mostrarCarta}/>
      <Cartas num={16} pinta="🍀"mostrarCarta={mostrarCarta}/>


    </div>

  )
}

export default App
