import CarsPage from '../pages/carsPage'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from '../pages/loginPage'
import RequireAuth from '../components/requireAuth'
import SignupPage from '../pages/signUpPage'
import LogoutPage from '../pages/logoutPage'

function App() {

 return (
   <div className='App'>
<BrowserRouter>
<ul>
   <li>
      <Link to='/'>Home</Link>
   </li>

   <li>
      <Link to='/login'>login</Link>
   </li>
   <li>
      <Link to='/signup'>Sign up</Link>
   </li>
   <li>
      <Link to='/logout'>Log out</Link>
   </li>
</ul>
<Routes>

   <Route index element={<RequireAuth><CarsPage/></RequireAuth> }>
   </Route>
   <Route path='/login' element={<LoginPage/>}/> 
   <Route path='/signup' element={<SignupPage/>}/> 
   <Route path='/logout' element={<LogoutPage/>}/> 
   
   </Routes>

   </BrowserRouter>
   </div>
 )
   
}

export default App