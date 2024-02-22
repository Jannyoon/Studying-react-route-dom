import Root from './pages/Root';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Photo from './pages/Photo.jsx';
import Base from './pages/Base.jsx';
const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    errorElement : <NotFound/>,
    children : [
      {index:true, element:<Base/>}, 
      {path:'/:photoId', element: <Photo/>}

    ]
  },
  {
    path : '/*',
    element : <Root/>,
    errorElement : <NotFound/>,
    children : [
      {index:true, element:<Base/>}, 
      {path:'/*:photoId', element: <Photo/>}

    ]
  }
])


function App() {
  return (
     <RouterProvider router={router}/>      
  );
}

export default App;
