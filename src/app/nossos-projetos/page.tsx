import styles from "../../styles/ourProjects.module.css"

import Image from "next/image"

import initialImage from "../../assets/img/nossos-projetos/ourProject-image.png"

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

        </main>
    )
}

export default Index;