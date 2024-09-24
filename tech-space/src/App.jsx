import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetail } from './components/ItemDetail'

import { CartProvider } from './context/CartContext'
import { TypeWriterComponent } from './components/TypeWritterComponent'
import { SliderComponent } from './components/SliderComponent'
function App() {
    
  return (
    <>
      <BrowserRouter>
        
        <SliderComponent>
            <TypeWriterComponent />
        </SliderComponent>
          
        <CartProvider>
          <header>
            <NavBar />
          </header>

          <main>
              <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/category/:id" element={<ItemListContainer />} />
                  <Route path="/item/:itemId" element={<ItemDetail />} />
              </Routes>
          </main>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;


