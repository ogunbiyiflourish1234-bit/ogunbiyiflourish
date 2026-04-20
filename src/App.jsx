import './App.css'
import Header from './components/Header'
import HomeView from './components/HomeView'
import RestaurantDetail from './components/RestaurantDetail'
import Footer from './components/Footer'
import { useAppLogic } from './hooks/useAppLogic'

export default function App() {
  const { cartItems, selectedRestaurant, searchTerm, filteredRestaurants, totalCartItems, setCartItems, setSelectedRestaurant, setSearchTerm, handleAddToCart, handleCheckout } = useAppLogic()

  return (
    <div className="app">
      <Header cartCount={totalCartItems} />
      {selectedRestaurant ? (
        <RestaurantDetail
          restaurant={selectedRestaurant}
          onBack={() => setSelectedRestaurant(null)}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemove={(id) => setCartItems(cartItems.filter(item => item.id !== id))}
          onCheckout={handleCheckout}
        />
      ) : (
        <HomeView
          filteredRestaurants={filteredRestaurants}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          onSelectRestaurant={setSelectedRestaurant}
        />
      )}
      <Footer />
    </div>
  )
}
