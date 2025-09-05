import { useState } from 'react'
import QuantitySelector from './components/quantity-selector/quantity-selector.components';
import ColorSelector from './components/color-selector/color-selector.components';
import ImageDots from './components/image-dot/image-dots.components';
import StarSelector from './components/star-selector/star-selector.components';
import ProductDetails from './components/product-details/product-details.components';

import {
    ProductCardContainer,
    ProductCard,
    ProductCardLeft,
    ProductIdTag,
    ProductImage,
    ProductCardRight,
    ProductInfo,
    ProductCategory,
    ProductName,
    ProductBrand,
    ProductSales,
    ProductPrice,
    Price,
    Dollar,
    ProductOptions,
    GroupButtons,
    ButtonTop,
    ButtonDown,
}from './App.style'

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
    <ProductCardContainer>
        <ProductCard>
            <ProductCardLeft>
                <ProductIdTag>RT34FY</ProductIdTag>

                <ProductImage>
                    <img src={productPictures[currentImageIndex]} alt="Modern Chair"/>   
                </ProductImage>

                {/* 圖片點點 */}
                <ImageDots 
                activeDot={currentImageIndex}
                dotClick={setCurrentImageIndex}
                />
            </ProductCardLeft>

            <ProductCardRight>
                <ProductInfo>
                    <ProductCategory>CHAIRS</ProductCategory>
                    <ProductName>Modern Chair</ProductName>
                    <ProductBrand>Tinner's House</ProductBrand>

                    <ProductSales>
                        <ProductPrice>
                            <Dollar/>
                            <Price>420</Price>
                        </ProductPrice>

                        {/* 星星評分 */}
                        <StarSelector/>
                    </ProductSales>
                        
                </ProductInfo>

                {/* 資訊欄 */}
                <ProductDetails />

                <ProductOptions>

                    <ColorSelector 
                    onColorSelect={setCurrentImageIndex} 
                    activeColor={currentImageIndex}
                    />

                    <QuantitySelector />
                </ProductOptions>

                <GroupButtons>
                    <ButtonTop>ADD TO MY WISHLIST</ButtonTop>
                    <ButtonDown>ADD TO CART</ButtonDown>
                </GroupButtons>
        
            </ProductCardRight>
        </ProductCard>
    </ProductCardContainer>
  )
}

export default App
