import Galeria from './Components/Galeria'
import './App.css'
import NagyKep from './Components/NagyKep'


import { UseKepContext} from './Contexts/KepContext'
import Nagykep from './Components/NagyKep'
function App() {
  const [KEPLISTA,aktIndex] = UseKepContext()

  return (
    <>
      <header>
        <h1>
          KÉPGALÉRIA
        </h1>
      </header>
      <main>
        <Nagykep kepem={KEPLISTA[aktIndex]}/>
        <Galeria lista={KEPLISTA} aktindex={aktIndex}/>
      </main>
    </>
  )
}

export default App
