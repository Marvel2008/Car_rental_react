import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from "./Central_Page/CentralPage";
import Contacts from "./ContactPage/contactpage"
import NewCar from './NewCar/newcar';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/new_cars' element={<NewCar/>}/>
      </Routes>

    </Router>
  )
}

export default App
