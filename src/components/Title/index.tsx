import title from "./style.module.css"

export const Title = ({ text }: { text: string }) => {
    return (
        <h2 className={title.title}>{text}</h2>
    )
}