// src/ProductCard.jsx
import { useState } from 'react';
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className="product-card">
            {/* product-card-left */}
            <div className="product-card-left">
                <div className="product-id-tag">RT34FY</div>

                <div className="product-image">
                    <img src="/images/素材/image/06.jpeg" alt="Modern Chair"/>   
                </div>
        
                <div className="image-dots">
                    <span className="dot dot-active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            {/* product-card-right */}
            <div className="product-card-right">
                <div className="product-info">
                    <div className="product-category">CHAIRS</div>
                    <h1 className="product-name">Modern Chair</h1>
                    <p className="product-brand">Tinner's House</p>

                    <div class="product-sales">
                        <div className="product-price">
                            <img src="/images/素材/icon/i.icon.dollar.svg" alt="icon-dollar"/>
                            <span class="price">420</span>
                        </div>

                        <div className="star-container">
                            <img src="/public/images/素材/icon/i.icon.star.active.svg" alt="icon-star"/>
                            <img src="/public/images/素材/icon/i.icon.star.active.svg" alt="icon-star"/>
                            <img src="/public/images/素材/icon/i.icon.star.active.svg" alt="icon-star"/>
                            <img src="/public/images/素材/icon/i.icon.star.active.svg" alt="icon-star"/>
                            <img src="/public/images/素材/icon/i.icon.star.svg" alt="icon-star"/>
                        </div>
                    </div>
                        
                </div>

                <div className="product-tab-details">
                    <div className="tab-items">
                        <span className="tab-name tab-active">DESCRIPTION</span>
                        <span className="tab-name">DETAILS</span>
                        <span className="tab-name">COMMENTS</span>
                    </div>
                    <p className="tab-text">
                        Lorem ipsum dolor sit amet co grhwh wrghio wrguhhw eriguhe erughiwhg nsdbfs gbfsbsf sfgbs fgbs fsgb fsgbur adipisicing elit. Ea exercitationem eos laudantium quos animi sed sit nam natus debitis odio vitae provident suscipit, rem, eaque at nihil maxime! Vero, pariatur.                    </p>
                    <span className="read-more">read more</span>
                </div>

                {/* product-options */}
                <div className="product-options">

                    {/* color */}
                    <div className="color-selector">
                        <span className="option-label">COLOR</span>
                        <div className="color">
                            <span className="color-circle c1 active"></span>
                            <span className="color-circle c2"></span>
                            <span className="color-circle c3"></span>
                            <span className="color-circle c4"></span>
                            <span className="color-circle c5"></span>
                            <span className="color-circle c6"></span>
                        </div>
                    </div>

                    {/* quantity and price */}
                    <div className="quantity-and-peice">    
                            <div className="quantity">
                                <p className="quantity-text">QUANTITY</p>

                                <div className="icon minus">
                                    <img src="/public/images/素材/icon/i.icon.minus.svg" alt="minus"/>
                                </div>

                                <div className="number-box">
                                    <p>0</p>
                                </div>

                                <div className="icon add">
                                    <img src="/public/images/素材/icon/i.icon.add.svg" alt="add"/>
                                </div>

                            </div>

                            <div className="total-price">
                                <p className="price-text">TOTAL PRICE</p>
                                <div className="price-container-down">
                                    <img src="/public/images/素材/icon/i.icon.dollar.svg" alt="dollar"/>
                                    <span className="price-down">420</span>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="group-buttons">
                    <button className="btn top">ADD TO MY WISHLIST</button>
                    <button className="btn down">ADD TO CART</button>
                </div>
        
            </div>
        </div>
    );
};

export default ProductCard;