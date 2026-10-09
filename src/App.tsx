import Galeria from './Components/Galeria'
import './App.css'
import NagyKep from './Components/NagyKep'


import { UseKepContext} from './Contexts/KepContext'
import Nagykep from './Components/NagyKep'
function App() {
  const [KEPLISTA,aktindex] = UseKepContext()

  return (
    <>
      <header>
        <h1>
          KÉPGALÉRIA
        </h1>
      </header>
      <main>
        <Nagykep kepem={KEPLISTA[aktindex]}/>
        <Galeria lista={KEPLISTA} aktindex={aktindex}/>
      </main>
    </>
  )
}

export default App
