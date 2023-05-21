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
          element: <Home></Home>,
          loader: () => {
            return fetch('http://182.163.101.173:49029/product-crud/products', {
              method: "GET",
              withCredentials: true,
              headers: {
                "apiKey": "r2N0zvMjBcJZa45Jql9fR/f6r7KmogqGsntwHGTcqc4=",
                "Content-Type": "application/json"
              }
            })
          }
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
