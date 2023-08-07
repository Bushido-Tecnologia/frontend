import home from "../styles/home.module.css"
import Image from "next/image"

import banner from "../assets/img/banner_home.png"
import introductoryImage from "../assets/img/introductory_section_image.png"

import { Button } from "@/components/Button"
import { Title } from "@/components/Title"
import { Mission } from "@/components/Mission"

const Home = () => {
  return (
    <main className={home.home}>
      <div className={home.home__init}>
        <Image
          className={home.home__init__banner}
          src={banner}
          alt=""
        />

        <div className={home.home__init__content}>
          <h4 className={home.home__init__content__subTitle}>Juntos podemos</h4>
          <h1 className={home.home__init__content__title}>Criar um mundo melhor para os jovens</h1>
          <Button
            text="Seja um voluntário"
            gradient={true}
          />
        </div>

      </div>

      <div className={home.home__introduction}>
        <Image
          src={introductoryImage}
          alt=""
          className={home.home__introduction__image}
        />

        <div className={home.home__introduction__description}>
          <h2 className={home.home__introduction__description__title}>Trabalhamos para melhorar a vida de nossos jovens por meio da prática direta</h2>
          <p className={home.home__introduction__description__text}>Jovens de diferentes origens têm um grande impacto em nós e em todas as nossas atividades. Eles destacam as partes da sociedade que estão quebradas, para que possamos ajudá-los de todas as maneiras possíveis para recuperar a esperança e florescer na vida.</p>
        </div>
      </div>

      <Title text="Missões" />
      <div className={home.home__missions}>
        <Mission text="Afastar as crianças e jovens do caminho das drogas e da violência através do esporte e da cultura." />
        <Mission text="Fomentar a prática do esporte, para prevenção de doenças causadas pela vida sedentária." />
        <Mission text="Contribuir no combate das doenças emocionais através de atividades físicas." />

      </div>

      <Title text="Objetivo" />
      <div className={home.home__objective}>
        <p className={home.home__objective__text}>
          Proporcionar uma vida saudável com interação socioeconômica das diversas camadas sociais, além disso, combater qualquer tipo de preconceito, seja na sociedade ou na comunidade e no combate e prevenção as doenças causadas pelo sedentarismo
        </p>
      </div>

      <Title text="Nossas Metas" />
      <div className={home.home__goals}>

        <div className={home.home__goals__goal}>
          <h5 className={home.home__goals__goal__data}>200 +</h5>
          <h6 className={home.home__goals__goal__description}>Jovens e crianças para alcançar no ano</h6>
        </div>

        <div className={home.home__goals__goal}>
          <h5 className={home.home__goals__goal__data}>R$700.000</h5>
          <h6 className={home.home__goals__goal__description}>Arrecadados no ano</h6>
        </div>

        <div className={home.home__goals__goal}>
          <h5 className={home.home__goals__goal__data}>x%</h5>
          <h6 className={home.home__goals__goal__description}>De metas alcançadas</h6>
        </div>
      </div>
    </main>
  )
}

export default Home;