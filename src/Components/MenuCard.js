import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

// Styled Components

const MenuList = styled.div`
    background: white;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    //max-height: 60%;  /* Set the maximum height */
    overflow-y: auto;
`;

const MenuItemWrapper = styled.div`
    margin-bottom: 2rem;
`;

const ItemTitle = styled.h3`
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    align-items: center;
`;

const DottedLine = styled.span`
    flex: 1;
    border-bottom: 1px dashed #A26100;
    opacity: 0.8;
    margin-top: 3%;
    margin-left: 1%;
    margin-right: 1%;
`;

const ItemDescription = styled.p`
    color: #888;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    text-align: left;
    margin: 0;
`;

const Price = styled.span`
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    color: #e07a3d;
`;

const MenuItem = ({ title, description, price }) => (
    <MenuItemWrapper>
        <ItemTitle>
            {title}
            <DottedLine />
            <Price>{`$${price}`}</Price>
        </ItemTitle>
        <ItemDescription>{description}</ItemDescription>
    </MenuItemWrapper>
);

const Menu = () => {
    const menuItems = [
        { title: 'Chicken Biryani', description: 'Sed ut perspiciatis unde omnis iste natus ero', price: 8.9 },
        { title: 'Chicken Tikka Masala', description: 'Sed ut perspiciatis unde omnis iste natus ero', price: 6.8 },
        { title: 'Chicken 65 Biryani', description: 'Sed ut perspiciatis unde omnis iste natus ero', price: 9.9 },
        { title: 'Chicken Curry Special', description: 'Sed ut perspiciatis unde omnis iste natus ero', price: 11.2 },
        { title: 'Methi Chaman', description: 'Sed ut perspiciatis unde omnis iste natus ero', price: 10.5 },
    ];

    return (
        <MenuList>
            {menuItems.map((item, index) => (
                <MenuItem key={index} title={item.title} description={item.description} price={item.price} />
            ))}
            <Button title="VIEW FULL MENU" width={220} height={41} />
        </MenuList>
    );
};

export default Menu;
