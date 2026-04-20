export default function Header({ cartCount }) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <span className="logo-emoji">🍽️</span>
                    <h1>FoodHub</h1>
                </div>
                <nav className="nav">
                    <button className="nav-btn">Home</button>
                    <button className="nav-btn">About</button>
                    <button className="nav-btn">Contact</button>
                </nav>
                <div className="cart-icon">
                    <span>🛒</span>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
            </div>
        </header>
    );
}
