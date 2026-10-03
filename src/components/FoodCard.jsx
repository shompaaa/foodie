import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, dish_name, main_ingredients, price, image_link, category } = food;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={image_link}
          alt={dish_name}
          height={200}
          width={200}
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>${price}</p>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <Link href={`/foods/${id}`}>
            <button className="btn btn-info">Show Details</button>
          </Link>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
