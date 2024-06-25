import React from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { BigGridBox, SmallGridBox } from "./GridBox";
import { HomeDescText, HomeText } from "./HomeText";

export const ShoeSection = ({ heading, description, img, gender, handleSection }) => {
    let promotionQuote = "Explore our latest collection of shoes!";
    const Sale = ["50% OFF", "40% OFF", "60% OFF", "THOUSAND HOT DEAL"];

    // Shuffle the Sale array
    const shuffledSale = Sale.sort(() => Math.random() - 0.5);

    // Check gender to create promotion quote accordingly
    if (gender === "kids") {
        promotionQuote = "Step into style with our trendy collection of kids' shoes! Great deal is waiting";
    } else if (gender === "women") {
        promotionQuote = "Complete your look with our fashionable women's shoes! Up to ";
    } else if (gender === "men") {
        promotionQuote = "Explore our men's shoe collection and enjoy discounts up to ";
    }

    return (
        <Box
            m={'60px auto 60px'}
            w={['94%', '94%', '94%', '94%', '80%']}
            textAlign={'center'}
        >
            <HomeText>{heading}</HomeText>
            <HomeDescText>
                {promotionQuote} <span style={{ color: 'red', fontSize: '120%' }}> {shuffledSale[0]}</span>
            </HomeDescText>

            <Grid
                onClick={() => { handleSection(gender) }}
                gap={['10px', '10px', '10px', '10px', '20px']}
                templateColumns={'repeat(2, 1fr)'}
            >
                <BigGridBox source={img[0]} />
                <SmallGridBox source={img[1]} />
                <SmallGridBox source={img[2]} />
            </Grid>
        </Box>
    );
};
