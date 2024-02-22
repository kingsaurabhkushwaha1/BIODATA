
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import FooterComponent from './componets/FooterComponent'
import HeaderComponent from './componets/HeaderComponet'
import ListEmployeeComponet from './componets/ListEmployeeComponet'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <ListEmployeeComponet/>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
