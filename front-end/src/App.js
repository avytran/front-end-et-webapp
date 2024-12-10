import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { HomePage } from './pages/HomePage'; 
import './App.css';


function App() {  
  return (  
    <Router>  
      <div>  
        <Routes>  
          <Route path="/" element={<HomePage />} /> 
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;