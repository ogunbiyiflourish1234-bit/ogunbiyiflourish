import RestaurantCard from './RestaurantCard'
import FoodItem from './FoodItem'
import Cart from './Cart'

export default function RestaurantDetail({ restaurant, onBack, cartItems, onAddToCart, onRemove, onCheckout }) {
    return (
        <div className="restaurant-detail">
            <button className="back-btn" onClick={onBack}>← Back</button>
            <div className="restaurant-header">
                <span className="detail-emoji">{restaurant.image}</span>
                <div>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.cuisine}</p>
                    <div className="detail-meta">
                        <span>⭐ {restaurant.rating}</span>
                        <span>🕐 {restaurant.deliveryTime}</span>
                        <span>💰 ${restaurant.deliveryFee}</span>
                    </div>
                </div>
            </div>
            <div className="app-container">
                <div className="foods-section">
                    <h3>Menu</h3>
                    <div className="foods-grid">
                        {restaurant.foods.map(food => <FoodItem key={food.id} food={food} onAddToCart={onAddToCart} />)}
                    </div>
                </div>
                <aside className="cart-sidebar">
                    <Cart cartItems={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
                </aside>
            </div>
        </div>
    )
}
