import React from "react";
import titleStyles from "./style.module.css";

type TextAlign = "left" | "right" | "center" | "justify" | "initial" | "inherit";

interface TitleProps {
    text: string;
    align?: TextAlign;
    margin?: string;
}

export const Title: React.FC<TitleProps> = ({ text, align, margin }) => {
    return (
        <h2
            className={titleStyles.title}
            style={{ textAlign: align || "center", margin: margin || "1.5em 0 .8em" }}
        >
            {text}
        </h2>
    );
};
