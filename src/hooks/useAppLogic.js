import { useState } from 'react'
import { restaurantsData } from '../data/restaurants'

export function useAppLogic() {
    const [cartItems, setCartItems] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredRestaurants = restaurantsData.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleAddToCart = (food) => {
        const exists = cartItems.find(item => item.id === food.id)
        setCartItems(exists
            ? cartItems.map(item => item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item)
            : [...cartItems, { ...food, quantity: 1 }]
        )
    }

    const handleCheckout = () => {
        alert(`Order placed! Total items: ${cartItems.length}\nThank you!`)
        setCartItems([])
    }

    return {
        cartItems,
        selectedRestaurant,
        searchTerm,
        filteredRestaurants,
        totalCartItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
        setCartItems,
        setSelectedRestaurant,
        setSearchTerm,
        handleAddToCart,
        handleCheckout,
    }
}
