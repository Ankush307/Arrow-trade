import React from "react";

interface buttonData {
    text?: string;
    myClass?: string;
    myOnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const CustomButton = ({ myClass, text, myOnClick }: buttonData) => {
    return (
        <button onClick={myOnClick} className={`leading-[121%] font-semibold py-[15.85px] max-md:text-sm rounded-[72px] transition-all duration-300 ${myClass}`}> {text}</button>
    );
};

export default CustomButton;
