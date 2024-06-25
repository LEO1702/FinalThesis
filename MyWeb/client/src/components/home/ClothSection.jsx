import React from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { ClothGridBox } from "./GridBox";
import { HomeDescText, HomeText } from "./HomeText";

export const ClothSection = ({ heading, description, img, gender, handleSection }) => {
    const promotionQuotes = {
        kids: "Explore our adorable collection of kids' clothing, with a deep ",
        women: "Discover elegant and stylish women's clothing! Up to ",
        men: "Find the perfect fit with our men's clothing range but still affordable for you with discount of "
    };
    
    const Sale = ["50% OFF!!", "40% OFF", "30% OFF!", "(HOT DEAL)", "HUNREDS SALE OFF!!"];

    // Shuffle the Sale array
    const shuffledSale = Sale.sort(() => Math.random() - 0.5);

    const promotionQuote = promotionQuotes[gender] || "The best clothing products in the product catalog with promotions up to 50%!!!";

    return (
        <Box
            m={'60px auto 60px'}
            w={['94%', '94%', '94%', '94%', '80%']}
            textAlign={'center'}
        >
            <HomeText>{heading}</HomeText>
            <HomeDescText>
                {promotionQuote}{' '}
                <span style={{ color: 'red' }}>{shuffledSale[0]}</span>
            </HomeDescText>

            <Grid
                onClick={() => { handleSection(gender) }}
                gap={['10px', '10px', '10px', '10px', '20px']}
                templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]}
            >
                {img.map((source, index) => (
                    <ClothGridBox key={index} source={source} />
                ))}
            </Grid>
        </Box>
    );
};
