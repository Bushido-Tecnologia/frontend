"use client"

import styles from "./style.module.css"

import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    imagePreview: StaticImageData;
    reportName: string
}

export const Report: React.FC<Props> = ({ description, imagePreview, title, reportName }) => {
    const openPdfInNewTab = () => {
        window.open(`/reports/${reportName}`, '_blank');
      };

    return (
        <div className={styles.report}>
            <div className={styles.report__content}>
                <h2 className={styles.report__content__title}>{title}</h2>
                <p className={styles.report__content__description}>{description}</p>
            </div>

            <div className={styles.report__image} onClick={openPdfInNewTab}>
                <Image src={imagePreview} alt="" />
            </div>
        </div>
    )
}