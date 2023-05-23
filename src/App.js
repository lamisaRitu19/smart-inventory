import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import EditProduct from './components/Products/EditProduct/EditProduct';
import { Toaster } from 'react-hot-toast';

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
        },
        {
          path: '/update/:id',
          element: <EditProduct></EditProduct>,
          loader: ({ params }) => {
            return fetch(
              `http://182.163.101.173:49029/product-crud/products/${params.id}`, {
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
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
