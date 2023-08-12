import styles from "./style.module.css"

import Image, { StaticImageData } from "next/image";

interface Props {
    icon: StaticImageData
    info: string;
    studentsNumber: string;
    priceMonth: string;
    priceYear: string;
}

export const Quota: React.FC<Props> = ({
    icon,
    info,
    studentsNumber,
    priceMonth,
    priceYear,
}) => {

    return (
        <div className={styles.quota}>
            <div className={styles.quota__image}>
                <Image src={icon} alt="" />
            </div>
            <div className={styles.quota__content}>
                <span>
                    <h4 className={styles.quota__content__info}>{info}</h4>
                    <p className={styles.quota__content__description}>Apoia {studentsNumber} alunos</p>
                </span>

                <span>
                    <h3 className={styles.quota__content__info}>{priceMonth}</h3>
                    <p className={styles.quota__content__description}>{priceYear}</p>
                </span>
            </div>
        </div>
    )
}