import styles from "./style.module.css"

interface Props {
    width?: string;
    height?: string;
    text: string;
}

export const Input: React.FC<Props> = ({ width, height, text }) => {
    return (
        <div className={styles.content}>
            <span className={styles.content__text}>{text}</span>
            <input
                className={styles.content__input}
                type="text"
                style={{ width: width || "100%", height: height || "2.5em" }}
            />
        </div>
    )
}
