import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CategoryProvider } from './context/CategoryContext'
import { CartProvider } from './context/CartContext'
import { TypeWriterComponent } from './components/TypeWritterComponent'
import { SliderComponent } from './components/SliderComponent'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Checkout } from './components/Checkout'

// Componente Layout para manejar la visibilidad del Slider
function Layout({ children }) {
  const location = useLocation();  // Ahora dentro del contexto del Router

  return (
    <>
      {(location.pathname == "/" || location.pathname.includes("/category")) && (
        <SliderComponent>
          <TypeWriterComponent />
        </SliderComponent>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CategoryProvider>
          <header>
            <NavBar />
          </header>

          <main>
            <Layout />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              </Routes>
          </main>
        </CategoryProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
