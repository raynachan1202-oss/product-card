import { useState } from 'react'
import './App.css'
import QuantitySelector from './QuantitySelector';
import ColorSelector from './ColorSelector';
import ImageDots from './ImageDots';
import StarSelector from './StarSelector';
import ProductDetails from './ProductDetails';



const productPictures = [
    '/chiar-image/06.jpeg',
    '/chiar-image/05.jpeg',
    '/chiar-image/04.jpeg',
    '/chiar-image/03.jpeg',
    '/chiar-image/02.jpeg',
    '/chiar-image/01.jpeg',
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  

  return (
    <div className="product-card">
            {/* product-card-left */}
            <div className="product-card-left">
                <div className="product-id-tag">RT34FY</div>

                <div className="product-image">
                    <img src={productPictures[currentImageIndex]} alt="Modern Chair"/>   
                </div>

                {/* 圖片點點 */}
                <ImageDots 
                activeDot={currentImageIndex}
                dotClick={setCurrentImageIndex}
                />
            </div>

            {/* product-card-right */}
            <div className="product-card-right">
                <div className="product-info">
                    <div className="product-category">CHAIRS</div>
                    <h1 className="product-name">Modern Chair</h1>
                    <p className="product-brand">Tinner's House</p>

                    <div className="product-sales">
                        <div className="product-price">
                            <img src="/public/icon/i.icon.dollar.svg" alt="icon-dollar"/>
                            <span className="price">420</span>
                        </div>

                        {/* 星星評分 */}
                        <StarSelector />
                    </div>
                        
                </div>

                {/* 資訊欄 */}
                <ProductDetails />

                {/* product-options */}
                <div className="product-options">
                    {/* color */}
                    <ColorSelector 
                    onColorSelect={setCurrentImageIndex} 
                    activeColor={currentImageIndex}
                    />

                    {/* quantity and price */}
                    <QuantitySelector />
                </div>

                <div className="group-buttons">
                    <button className="btn top">ADD TO MY WISHLIST</button>
                    <button className="btn down">ADD TO CART</button>
                </div>
        
            </div>
        </div>
  )
}

export default App
