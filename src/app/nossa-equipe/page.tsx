import styles from "../../styles/ourTeam.module.css"

import Image from "next/image"

import initialImage from "../../assets/img/nossa-equipe/initial-section-image.png"

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
        </main>
    )
}

export default Index;