import styles from "./style.module.css"

import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    imagePreview: StaticImageData
}

export const Report: React.FC<Props> = ({ description, imagePreview, title }) => {
    return (
        <div className={styles.report}>
            <div className={styles.report__content}>
                <h2 className={styles.report__content__title}>{title}</h2>
                <p className={styles.report__content__description}>{description}</p>
            </div>

            <div className={styles.report__image}>
                <Image src={imagePreview} alt="" />
            </div>
        </div>
    )
}