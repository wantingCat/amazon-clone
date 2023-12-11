import React from "react";
import classes from "./MiniCard.module.css"

type Input = {
    title: string,
    image: string,
    rating: number
}

const MiniCard: React.FC<Input> = ({ image, rating, title }) => {
    return (
        <div className={classes.card}>
            <img src={image} alt={title} height={80} />
            <p>{rating}</p>
        </div>
    )
}

export default MiniCard;