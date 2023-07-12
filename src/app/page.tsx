import home from "../styles/home.module.css"
import Image from "next/image"

import banner from "../assets/img/banner_home.png"

import { Button } from "@/components/Button"

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
    </main>
  )
}

export default Home;