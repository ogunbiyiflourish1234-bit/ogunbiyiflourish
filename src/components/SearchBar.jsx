export default function SearchBar({ onSearch }) {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for restaurants or food..."
                className="search-input"
                onChange={handleChange}
            />
            <button className="search-btn">🔍</button>
        </div>
    );
}
