import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChainsIcon from '../../assets/icons/chains.svg';
import EarringsIcon from '../../assets/icons/earrings.svg';
import BraceletsIcon from '../../assets/icons/bracelet.svg';
import BanglesIcon from '../../assets/icons/bangles.svg';
import NecklaceSetsIcon from '../../assets/icons/necklaces.svg';
import PendantSetsIcon from '../../assets/icons/pendant-set.svg';
import MangalsutrasIcon from '../../assets/icons/mangalsutra.svg';
import RingsIcon from '../../assets/icons/rings.svg';
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { dummyProducts, dummyCategories } from "../../backend/data/dummyData";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel.tsx";
import { Badge } from "@/components/ui/badge.tsx"; // Adjust the path as needed

interface Product {
    photos: string[];
    code: string;
    name: string;
    categories: string[]; // Single category for each product
    price: number;
    discountPrice?: number;
    categoryId: number;
}

interface Category {
    $id: string;
    name: string;
    icon: string;
    label: string;
}

const categories: Category[] = [
    { $id: "1", icon: ChainsIcon, label: 'CHAINS' },
    { $id: "2", icon: EarringsIcon, label: 'EARRINGS' },
    { $id: "3", icon: BraceletsIcon, label: 'BRACELETS' },
    { $id: "4", icon: BanglesIcon, label: 'BANGLES' },
    { $id: "5", icon: NecklaceSetsIcon, label: 'NECKLACE SETS' },
    { $id: "6", icon: PendantSetsIcon, label: 'PENDANT SETS' },
    { $id: "7", icon: MangalsutrasIcon, label: 'MANGALSUTRAS' },
    { $id: "8", icon: RingsIcon, label: 'RINGS' },
];

const TopSelling: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null); // State for selected category
    const productsPerPage = 3;

    // Filter products based on the selected category
    const filteredProducts = selectedCategoryId
        ? dummyProducts.filter(product => product.categoryId === selectedCategoryId)
        : dummyProducts;

    // Calculate totalPages based on filtered products
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Get the products for the current page
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    // Handle page navigation
    const goToPage = (page: number) => setCurrentPage(page);
    const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    return (
        <div className="top-selling-page flex flex-col sm:flex-row gap-8">
            {/* Sidebar */}
            <div className="sidebar bg-gray-50 p-6 rounded-lg shadow-md w-full sm:w-1/4 transition-all">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Top-Selling Jewelry</h2>
                <p className="text-gray-600 mb-6">Everything you need to shine</p>
                <ScrollArea className="w-full h-120">
                    <ul className="space-y-6">
                        {categories.map((category) => (
                            <li key={category.$id} className="category">
                                <Link
                                    to="#"
                                    className={`flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-all ${selectedCategoryId === Number(category.$id) ? 'text-yellow-600' : ''}`}
                                    onClick={() => setSelectedCategoryId(Number(category.$id))} // Update selected category ID
                                >
                                    <img src={category.icon} alt={category.label} className="w-6 h-6" />
                                    <span className="font-semibold">{category.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </div>

            {/* Product List */}
            <div className="product-list w-full sm:w-3/4">
                {filteredProducts.length === 0 ? (
                    <p className="text-center text-lg text-gray-500">No products found</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentProducts.map((product, index) => (
                                <div key={index} className="product-card bg-white p-6 rounded-lg shadow-lg relative">
                                    <Badge className="absolute z-10 bg-stone-900 hover:bg-stone-900 text-white rounded-none">
                                        {categories.find(category => category.$id === String(product.categoryId))?.label || "Unknown Category"}
                                    </Badge>
                                    <Carousel className="hover:cursor-w-resize">
                                        <CarouselContent>
                                            {product.photos.slice(0, 3).map((photo, index) => (
                                                <CarouselItem key={index}>
                                                    <img src={photo} alt={product.name} className="object-cover h-full w-full rounded-lg" />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                    </Carousel>
                                    <p className="product-code text-gray-500 text-sm mt-2">
                                        Size(s): {product.size?.join(", ") || "N/A"}
                                    </p>
                                    <h3 className="product-name font-semibold text-lg text-gray-800">{product.name}</h3>
                                    <p className="price mt-4 flex items-center">
                                        {product.discountPrice ? (
                                            <>
                                                <span className="original-price line-through text-gray-500 mr-2">Rs {product.price}</span>
                                                <span className="discount-price text-yellow-600 font-bold">Rs {product.discountPrice}</span>
                                            </>
                                        ) : (
                                            <span className="text-gray-800 font-bold">Rs {product.price}</span>
                                        )}
                                    </p>
                                    <div className="add-to-cart mt-4 flex items-center">
                                        <button className="quantity-btn bg-gray-200 text-gray-700 px-2 py-1 rounded-l">-</button>
                                        <span className="quantity px-4 py-1 bg-gray-100">1</span>
                                        <button className="quantity-btn bg-gray-200 text-gray-700 px-2 py-1 rounded-r">+</button>
                                        <Button className="cart-btn ml-4 bg-black text-white px-4 py-2">Add to Cart</Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="pagination-controls flex justify-center items-center mt-8 space-x-2">
                            <Button onClick={goToPreviousPage} disabled={currentPage === 1} className="px-3 py-2 text-sm">
                                &lt;
                            </Button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPage(index + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-white text-black' : 'bg-gray-100 text-gray-800'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <Button onClick={goToNextPage} disabled={currentPage === totalPages} className="bg-black px-3 py-2 text-sm">
                                &gt;
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopSelling;
