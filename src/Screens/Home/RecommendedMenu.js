import React from "react";
import TextComponent from "../../Components/Text";
import Menu from "../../Components/MenuCard";
import BestRecommendMenu from '../../Assets/BestRecommendMenu.svg';
import diagonallines from "../../Assets/diagonallines.svg";
import verticallines from "../../Assets/verticallines.svg";
import './RecommendedMenu.css';


const RecommendedMenu = (props) => {
    return (
        <div className="recommend-menu">
            <div className="recommend-menu-text">
                <TextComponent
                    title="Our Chef's Special"
                    color="#A26100"
                    fontFamily="Dancing Script, cursive"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                />
                <TextComponent
                    title="Best Recommendation Menu"
                    color="#000"
                    fontFamily="Poppins"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                />
            </div>
            <div className="menu-wrapper">
                <img src={diagonallines} alt="Diagonal Lines" className="recom-diagonal-lines"/>
                <div className="menu-card">
                    <Menu/>
                </div>
                <img className="menu-img" src={BestRecommendMenu} alt="Best Recommend Menu"/>
                <img src={verticallines} alt="Diagonal Lines" className="vertical-lines"/>
            </div>
        </div>
    )
}

export default RecommendedMenu;