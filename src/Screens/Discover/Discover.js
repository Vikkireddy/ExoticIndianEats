import React from "react";
import TextComponent from "../../Components/Text";
import './Discover.css';
import Card from "../../Components/CardContainer";
import FoodIcon from "../../Assets/food-icon.svg";


const Discover = (props) => {
    return (
        <div className={"discover-main"}>
            <div className="discover">
                <TextComponent
                    title="Discover"
                    color="#A26100"
                    fontFamily="Dancing Script, cursive"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                />
                <TextComponent
                    title="Our Specialist Cuisine"
                    color="#000"
                    fontFamily="Poppins"
                    fontSize={36}
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                />
            </div>
            <div className={"cards"}>
                <div className={"discovery-row1"}>
                    <div className={"discovery-row1-card"}>
                        <Card
                            icon={FoodIcon}
                            topLeft="40px"
                            topRight="0px"
                            bottomLeft="0px"
                            bottomRight="40px"
                            title="Middle - East Food1"
                            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                            backgroundColor="#0D1518"
                        />
                    </div>
                    <div className={"discovery-row1-card"}>
                        <Card
                            icon={FoodIcon}
                            topLeft="0px"
                            topRight="40px"
                            bottomLeft="40px"
                            bottomRight="0px"
                            title="Middle - East Food2"
                            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                            backgroundColor="#0D1518"
                        />
                    </div>
                </div>

                <div className={"discovery-row1"}>
                    <div className={"discovery-row1-card"}>
                        <Card
                            icon={FoodIcon}
                            topLeft="0px"
                            topRight="40px"
                            bottomLeft="40px"
                            bottomRight="0px"
                            title="Middle - East Food3"
                            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                            backgroundColor="#0D1518"
                        />
                    </div>
                    <div className={"discovery-row1-card"}>
                        <Card
                            icon={FoodIcon}
                            topLeft="40px"
                            topRight="0px"
                            bottomLeft="0px"
                            bottomRight="40px"
                            title="Middle - East Food4"
                            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                            backgroundColor="#0D1518"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;