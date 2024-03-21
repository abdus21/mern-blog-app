import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard';
const router =createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/sign-in',
    element : <SignIn/>
  },
  {
    path : '/sign-up',
    element : <SignUp/>
  },
  {
    path : '/project',
    element : <Project/>
  },
  {
    path : '/dashboard',
    element : <Dashboard/>
  },
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;