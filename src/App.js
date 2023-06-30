
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

function App() {
  return (
   
  <CartProvider>

<BrowserRouter>
       <Routes>
         
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/createUser' element={<SignUp/>} />
          <Route path='/myOrder' element={<MyOrder/>} />
       </Routes>
    </BrowserRouter>
  </CartProvider>

    

 
   
  )
}

export default App;
