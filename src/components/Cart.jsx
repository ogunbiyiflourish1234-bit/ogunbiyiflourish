export default function Cart({ cartItems, onRemove, onCheckout }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="cart empty-cart">
                <h2>Your Cart</h2>
                <p className="empty-msg">Your cart is empty 🛒</p>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="item-details">
                            <span className="item-emoji">{item.image}</span>
                            <div>
                                <p className="item-name">{item.name}</p>
                                <p className="item-qty">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="item-actions">
                            <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                                className="remove-btn"
                                onClick={() => onRemove(item.id)}
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Delivery Fee:</span>
                    <span>$2.99</span>
                </div>
                <div className="summary-row total">
                    <span>Total:</span>
                    <span>${(total + 2.99).toFixed(2)}</span>
                </div>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>
                Checkout
            </button>
        </div>
    );
}
