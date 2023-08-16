import { StaticImageData } from "next/image"
import Image from "next/image";

import styles from "./style.module.css"

interface Props {
    image: StaticImageData;
    info: string;
    description: string;
}

export const QuotaDonation: React.FC<Props> = ({ description, image, info }) => {
    return (
        <div className={styles.quota_donation}>
            <Image className={styles.quota_donation__image} src={image} alt="" />
            <h5 className={styles.quota_donation__info}>{info}</h5>
            <h6 className={styles.quota_donation__description}>{description}</h6>
        </div>
    )
}