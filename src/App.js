import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
