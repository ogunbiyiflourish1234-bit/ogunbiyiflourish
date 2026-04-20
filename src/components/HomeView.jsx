import SearchBar from './SearchBar'
import RestaurantCard from './RestaurantCard'

export default function HomeView({ filteredRestaurants, searchTerm, onSearch, onSelectRestaurant }) {
    return (
        <>
            <section className="hero-banner">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <h1>Luxury food delivery for discerning tastes</h1>
                        <p>Discover premium restaurants, curated menus, and fast delivery in one elegant experience.</p>
                        <div className="hero-cta">
                            <button className="cta-primary" onClick={() => document.querySelector('.search-input')?.focus()}>Start ordering</button>
                            <button className="cta-secondary">Explore premium dining</button>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <strong>4.9 ⭐</strong>
                                <span>Top-rated chefs</span>
                            </div>
                            <div className="hero-stat">
                                <strong>250+</strong>
                                <span>Curated restaurants</span>
                            </div>
                            <div className="hero-stat">
                                <strong>20 min</strong>
                                <span>Average delivery</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-card">
                            <span className="highlight">✨</span>
                            <h3>Experience elevated dining</h3>
                            <p>From gourmet signature dishes to premium service, welcome to a platform designed for high patronage and exceptional taste.</p>
                        </div>
                    </div>
                </div>
            </section>

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
