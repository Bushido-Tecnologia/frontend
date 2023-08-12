import styles from "../../styles/ourProjects.module.css"

import Image from "next/image"

import initialImage from "../../assets/img/nossos-projetos/ourProject-image.png"
import projectImage1 from "../../assets/img/nossos-projetos/Karatê sem fronteiras/image1.png"
import projectImage2 from "../../assets/img/nossos-projetos/Karatê sem fronteiras/image2.png"
import projectImage3 from "../../assets/img/nossos-projetos/Karatê sem fronteiras/image3.png"
import projectImage4 from "../../assets/img/nossos-projetos/Karatê sem fronteiras/image4.png"
import projectImage5 from "../../assets/img/nossos-projetos/Karatê sem fronteiras/image5.png"
import projectImage6 from "../../assets/img/nossos-projetos/Karatê sem fronteiras/image6.png"

import { Title } from "@/components/Title"

const Index = () => {
    return (
        <main className={styles.our_projects}>
            <div className={styles.our_projects__init}>
                <div className={styles.our_projects__init__content}>
                    <Title
                        text="Nossos Projetos"
                        align="left"
                        margin="0 0 .5em"
                    />

                    <p className={styles.our_projects__init__content__text}>
                        Nascida em 2015 o Instituto Força Jovem Bushido, com o objetivo de ajudar as crianças e jovens a ficarem longe das drogas e da violência; hoje agrega a sua missão o incentivo as práticas esportivas, para ter uma qualidade de vida, seja nos lares ou seja em ambiente de trabalho.
                    </p>
                </div>

                <div className={styles.our_projects__init__image}>
                    <Image src={initialImage} alt="" />
                </div>
            </div>

            <Title text="Karatê sem fronteiras" />
            <div className={styles.our_projects__projects}>
                <Image className={styles.our_projects__projects__image} src={projectImage1} alt="" />
                <Image className={styles.our_projects__projects__image} src={projectImage2} alt="" />
                <Image className={styles.our_projects__projects__image} src={projectImage3} alt="" />
                <Image className={styles.our_projects__projects__image} src={projectImage4} alt="" />
                <Image className={styles.our_projects__projects__image} src={projectImage5} alt="" />
                <Image className={styles.our_projects__projects__image} src={projectImage6} alt="" />
            </div>

        </main>
    )
}

export default Index;