import styles from "../../styles/ourTeam.module.css"

import Image from "next/image"

import initialImage from "../../assets/img/nossa-equipe/initial-section-image.png"

import { Title } from "@/components/Title"
import { Pearson } from "@/components/Pearson"

const Index = () => {
    return (
        <main className={styles.ourTeam}>
            <div className={styles.ourTeam__init}>
                <div className={styles.ourTeam__init__content}>
                    <h1 className={styles.ourTeam__init__content__title}>Apoiamos crianças e jovens para que alcancem seu potencial máximo!</h1>
                    <p className={styles.ourTeam__init__content__text}>Nascida em 2015, o instituto procura ajudar crianças e jovens a se manterem longe das drogas e da violência, com um time focado em nossos objetivos.</p>
                </div>

                <div className={styles.ourTeam__init__image}>
                    <Image src={initialImage} alt="" />
                </div>
            </div>

            <Title text="Nossa Equipe" />
            <div className={styles.ourTeam__content}>
                <Pearson name="Luciano de Oliveira Alves" position="Presidente" rightToLeft={true} />
                <Pearson name="Julian Del Piero" position="Secretário" rightToLeft={false} />
                <Pearson name="Géssika Silva Campos" position="Tesoureira" rightToLeft={true} />
                <Pearson name="Josebias Oliveira Alves" position="Topógrafo" rightToLeft={false} />
                <Pearson name="Luiz Carlos de S. Neves" position="Músico" rightToLeft={true} />
                <Pearson name="Ewerton José da Costa Jovelino" position="Músico" rightToLeft={false} />
                <Pearson name="Rogério Alvarenga" position="Professor" rightToLeft={true} />
                <Pearson name="Vitor de Carli " position="Monitor de karatê" rightToLeft={false} />
            </div>
        </main>
    )
}   

export default Index;