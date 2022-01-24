import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Latest from './views/Home/new_release.jsx'
import Details from './views/Detail/detail.jsx'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/Latest" element={<Latest/>}/>
        </Routes>      
      </Router>
  );
}

export default App;
