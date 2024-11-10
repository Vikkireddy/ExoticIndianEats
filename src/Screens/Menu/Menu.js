import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f8fafc;
  padding: 20px;
`;

const MenuCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 350px;
`;

const MenuTitle = styled.h2`
  font-family: 'Cursive', sans-serif;
  color: #b16929;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MenuButton = styled.button`
  background-color: ${(props) => props.bgColor || 'gray'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ItemName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ItemPrice = styled.div`
  font-size: 1.2rem;
  color: #b16929;
`;

const ItemDescription = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-top: 5px;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

const ImageItem = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;

const Menu = () => {
    return (
        <MenuContainer>
            <MenuCard>
                <MenuTitle>Appetizer</MenuTitle>
                <ButtonGroup>
                    <MenuButton bgColor="#2dbe60">Veg</MenuButton>
                    <MenuButton bgColor="#a33e25">Non-Veg</MenuButton>
                    <MenuButton bgColor="#e39c29">Special</MenuButton>
                </ButtonGroup>

                <MenuItem>
                    <div>
                        <ItemName>Chilli Paneer</ItemName>
                        <ItemDescription>Sed ut perspiciatis unde omnis iste natus ero</ItemDescription>
                    </div>
                    <ItemPrice>$50</ItemPrice>
                </MenuItem>

                <MenuItem>
                    <div>
                        <ItemName>Veg Spring Rolls</ItemName>
                        <ItemDescription>Sed ut perspiciatis unde omnis iste natus ero</ItemDescription>
                    </div>
                    <ItemPrice>$22</ItemPrice>
                </MenuItem>

                <MenuItem>
                    <div>
                        <ItemName>Chicken Lollipop</ItemName>
                        <ItemDescription>Sed ut perspiciatis unde omnis iste natus ero</ItemDescription>
                    </div>
                    <ItemPrice>$37</ItemPrice>
                </MenuItem>

                <MenuItem>
                    <div>
                        <ItemName>Chilli Shrimp</ItemName>
                        <ItemDescription>Sed ut perspiciatis unde omnis iste natus ero</ItemDescription>
                    </div>
                    <ItemPrice>$41</ItemPrice>
                </MenuItem>

                <MenuItem>
                    <div>
                        <ItemName>Kebabs Platter</ItemName>
                        <ItemDescription>Sed ut perspiciatis unde omnis iste natus ero</ItemDescription>
                    </div>
                    <ItemPrice>$19</ItemPrice>
                </MenuItem>
            </MenuCard>

            <ImageGrid>
                <ImageItem src="https://via.placeholder.com/150" alt="Item Image 1" />
                <ImageItem src="https://via.placeholder.com/150" alt="Item Image 2" />
                <ImageItem src="https://via.placeholder.com/150" alt="Item Image 3" />
            </ImageGrid>
        </MenuContainer>
    );
};

export default Menu;
