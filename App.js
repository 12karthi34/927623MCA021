import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Top Products</h1>
            </header>
            <ProductList count={5} /> {/* Display top 5 products */}
        </div>
    );
}

export default App;