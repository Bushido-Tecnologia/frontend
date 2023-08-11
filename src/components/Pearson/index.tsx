import styles from "./style.module.css"

import Image from "next/image";

import pearsonImage from "../../assets/img/nossa-equipe/pearson-image-example.png"

interface Pearson {
    name: string;
    position: string,
    rightToLeft: boolean;
}

export const Pearson: React.FC<Pearson> = ({ name, position, rightToLeft }) => {
    return (
        <div className={rightToLeft ? styles.pearson : styles.pearson_reverse}>
            <div className={styles.pearson__img}>
                <Image src={pearsonImage} alt="" />
            </div>

            <div className={styles.pearson__info}>
                <h4 className={styles.pearson__info__name}>{name}</h4>
                <h4 className={styles.pearson__info__position}>{position}</h4>
            </div>
        </div>
    )
}