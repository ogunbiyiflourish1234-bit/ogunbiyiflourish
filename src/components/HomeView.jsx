import SearchBar from './SearchBar'
import RestaurantCard from './RestaurantCard'

export default function HomeView({ filteredRestaurants, searchTerm, onSearch, onSelectRestaurant }) {
    return (
        <>
            <div className="hero-banner">
                <h1>Welcome to FoodHub</h1>
                <p>Order your favorite food from top restaurants</p>
            </div>
            <div className="main-container">
                <SearchBar onSearch={onSearch} />
                <section className="restaurants-section">
                    <h2>{searchTerm ? `Search results for "${searchTerm}"` : 'Popular Restaurants'}</h2>
                    {filteredRestaurants.length > 0 ? (
                        <div className="restaurants-grid">
                            {filteredRestaurants.map(r => <RestaurantCard key={r.id} restaurant={r} onSelect={onSelectRestaurant} />)}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>No restaurants found 😔</p>
                            <button onClick={() => onSearch('')}>Clear Search</button>
                        </div>
                    )}
                </section>
            </div>
        </>
    )
}
