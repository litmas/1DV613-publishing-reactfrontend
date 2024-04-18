import CarsPage from '../pages/carsPage'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from '../pages/loginPage'
import RequireAuth from '../components/requireAuth'

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
</ul>
<Routes>

   <Route index element={<RequireAuth><CarsPage/></RequireAuth> }>
   </Route>
   <Route path='/login' element={<LoginPage/>}/>
   
   </Routes>

   </BrowserRouter>
   </div>
 )
   
}

export default App