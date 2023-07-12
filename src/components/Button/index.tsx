import style from "./style.module.css"

export const Button = ({ text, gradient }: { text: string, gradient?: boolean }) => {
    return (
        <button className={gradient ? style.buttonTransparent : style.button}>
            {text}
        </button>
    )
}