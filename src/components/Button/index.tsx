import style from "./style.module.css"

interface Props {
    text: string;
    gradient: boolean;
    center?: boolean
}

export const Button: React.FC<Props> = ({ text, gradient, center }) => {
    return (
        <span className={style.content} style={{ width: center ? "100%" : "min-content" }}>
            <button
                className={gradient ? style.buttonTransparent : style.button}
                style={{ margin: center ? "0 auto" : "1em 0" }}>
                {text}
            </button>
        </span>
    )
}
