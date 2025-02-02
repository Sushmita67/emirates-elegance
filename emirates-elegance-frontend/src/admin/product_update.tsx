import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [productId]);

    const handleUpdateProduct = async () => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                alert("Product updated successfully!");
            } else {
                alert("Failed to update product!");
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return product ? (
        <div>
            <h2>Edit Product</h2>
            <input
                type="text"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
                type="number"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
            <textarea
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
            <button onClick={handleUpdateProduct}>Save Changes</button>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default EditProduct;
