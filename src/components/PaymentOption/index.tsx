import { StaticImageData } from "next/image"
import Image from "next/image"

import styles from "./style.module.css"

interface Props {
    image: StaticImageData
}

export const PaymentOption: React.FC<Props> = ({ image }) => {
    return (
        <div className={styles.payment}>
            <Image className={styles.payment__image} src={image} alt="" />
        </div>
    )
}