import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  thumbImg?: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { thumbImg, selected, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number flex flex-col"
      >
        {thumbImg && (
          <img className="w-full h-full rounded-[8px]" src={thumbImg} alt="" />
        )}
      </button>
    </div>
  );
};
