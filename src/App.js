import logo from './logo.svg';
import './App.css';
import Header from "./componenys/Header";
import Login from './componenys/Login';
import Regisler from './componenys/Regisler';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './componenys/Dashboard';
function App() 
{
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/regisyer" element={<Regisler/>}/>
      <Route path="/dash" element={<Dashboard/>}/>
    </Routes>
    </>
  );
}
export default App;