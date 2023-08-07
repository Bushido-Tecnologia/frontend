import mission from "./style.module.css"

export const Mission = ({ text }: { text: string }) => {
    return (
        <div className={mission.mission}>
            <h6 className={mission.mission__content}>{text}</h6>
        </div>
    )
}