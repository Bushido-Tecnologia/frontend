import styles from "./style.module.css"

export const Input = ({ width, height }: { width?: string, height?: string }) => {
    return (
        <input
            className={styles.input}
            type="text"
            style={{ width: width || "100%", height: height || "2.5em" }}
        />
    )
}
