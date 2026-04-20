export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About FoodHub</h4>
                    <p>Your favorite food delivery service. Fast, Fresh, and Delicious!</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#restaurants">Restaurants</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@foodhub.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social">
                        <a href="#fb">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#insta">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 FoodHub. All rights reserved.</p>
            </div>
        </footer>
    );
}
