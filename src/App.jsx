import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import GetSingleProductsPage from './pages/GetSingleProductImage';
import Error404 from './layouts/Error404';
// context API
import { ProductProvider } from './context/ProductContext';


export default function App() {
  return (
    // provider component
    <ProductProvider>
      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="*" element={<Error404 />} />
            <Route path="/About" Component={AboutPage} />
            <Route path="/Products" Component={ProductsPage} />
            <Route path="/Products/:id" Component={GetSingleProductsPage} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}