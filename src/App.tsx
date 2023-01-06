import { Card } from './components/Card/Card'
import { CardProvider } from './context/CardContext'


function App() {
  return (
    <CardProvider className="App">
      <Card />
    </CardProvider>
  )
}

export default App
