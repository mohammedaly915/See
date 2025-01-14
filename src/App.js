import { Route, Routes } from 'react-router-dom';
import './App.scss'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watch from './pages/Watch';
import { useContext } from 'react';
import {AuthContext} from './AuthContext/AuthContext';
import Movie from './pages/Movie';
 
function App() { 
  const { user } = useContext(AuthContext);
  //const user=true;
  return (
    <div className="App">
      <Routes> 
          <Route path='/' element={user ? <Home /> : <Register/>} />
          <Route path='login' element={!user ? <Login /> :<Home/>} />
          <Route path='register' element={!user?<Register/>:<Home/>} />
          <Route path='movie' element={user ? <Movie /> : <Register/>} />
          {/*VVVVVVVVVVVVV if Found user VVVVVVVVVVVVVVVVV */}{
            user&&
            <>
            <Route path='watch' element={<Watch/>} />
            <Route path="movies" element={<Home type="movie" />}/>
            <Route path="series" element={<Home type="series" />}/> 
            

          </> 
        }
      </Routes>
    </div>
  );
}

export default App;
