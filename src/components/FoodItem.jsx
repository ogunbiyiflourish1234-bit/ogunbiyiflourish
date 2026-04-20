export default function FoodItem({ food, onAddToCart }) {
    return (
        <div className="food-item">
            <div className="food-image">
                <span className="food-emoji">{food.image}</span>
            </div>
            <div className="food-content">
                <h4>{food.name}</h4>
                <p className="food-desc">{food.desc}</p>
                <div className="food-footer">
                    <span className="price">${food.price.toFixed(2)}</span>
                    <button
                        className="add-btn"
                        onClick={() => onAddToCart(food)}
                    >
                        + Add
                    </button>
                </div>
            </div>
        </div>
    );
}
