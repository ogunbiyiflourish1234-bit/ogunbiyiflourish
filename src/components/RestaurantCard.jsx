export default function RestaurantCard({ restaurant, onSelect }) {
    return (
        <div className="restaurant-card" onClick={() => onSelect(restaurant)}>
            <div className="restaurant-image">
                <span className="large-emoji">{restaurant.image}</span>
            </div>
            <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p className="cuisine">{restaurant.cuisine}</p>
                <div className="restaurant-meta">
                    <span className="rating">⭐ {restaurant.rating}</span>
                    <span className="delivery-time">🕐 {restaurant.deliveryTime}</span>
                    <span className="delivery-fee">💰 ${restaurant.deliveryFee}</span>
                </div>
            </div>
        </div>
    );
}
