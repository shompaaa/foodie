import Image from "next/image";
import React, { use } from "react";
import { BsStarFill } from "react-icons/bs";

const FoodDetails = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const food = data.data;

  const {
    image_link,
    dish_name,
    approximate_nutrition_per_serving,
    main_ingredients,
    rating,
  } = food;
  return (
    <div className="max-w-11/12 px-6 py-16 mx-auto">
      <article className=" text-center">
        <div className="space-y-6">
          <h1 className="text-xl font-bold md:tracking-tight md:text-xl">
            {dish_name}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2 mx-auto">
              <Image
                src={image_link}
                alt={dish_name}
                height={250}
                width={250}
              ></Image>
            </div>
          </div>
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
           {approximate_nutrition_per_serving.calories}
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50 flex items-center gap-1"
          >
           {rating} <BsStarFill/>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            Fat: {approximate_nutrition_per_serving.fat}
          </a>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Main Ingredients</h4>
          <ul className="ml-4 space-y-1 list-disc">
            {main_ingredients.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
