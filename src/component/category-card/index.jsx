import React from 'react';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="group hover:shadow-[3px_3px_20px_0px_rgba(50,50,50,0.25)]  transition-all border-2 border-gray rounded-[3px] p-5 relative flex gap-4 items-start justify-between ">
      <div>
        <h2 className="text-title-color group-hover:text-primary text-2xl font-bold">
          {title}
        </h2>
        <button className="absolute left-5 bottom-5 text-[#CDCDCD] text-sm font-normal">
          Подробее
        </button>
      </div>
      <img
        src={image}
        alt={title}
        className="w-[180px] h-[100px] object-contain"
      />
    </div>
  );
};

export default CategoryCard;
