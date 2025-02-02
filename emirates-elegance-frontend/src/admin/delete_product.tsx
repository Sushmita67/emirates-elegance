import React, { useState, useEffect } from "react";

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
            if (response.ok) {
                setProducts(products.filter((product) => product.id !== id));
                alert("Product deleted!");
            } else {
                alert("Failed to delete product!");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h2>Delete Product</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteProduct;
