import styles from "../../styles/doe.module.css"

import { Title } from "@/components/Title"
import { Quota } from "@/components/Quota"

import imageDonate1 from "../../assets/img/donate/image-1.png"
import imageDonate2 from "../../assets/img/donate/image-2.png"
import imageDonate3 from "../../assets/img/donate/image-3.png"
import imageDonate4 from "../../assets/img/donate/image-4.png"

const Index = () => {
    return (
        <div className={styles.donate}>
            <span className={styles.donate__content_title}>
                <Title
                    text="Cotas sugeridas para empresas e contrapartidas"
                    align="left"
                />
            </span>

            <div className={styles.donate__quotas}>
                <Quota
                    icon={imageDonate1}
                    info="Ouro"
                    studentsNumber="9"
                    priceMonth="R$ 3.600/mês"
                    priceYear="R$ 43.200/ano"
                />
                <Quota
                    icon={imageDonate2}
                    info="Prata"
                    studentsNumber="6"
                    priceMonth="R$ 2.400/mês"
                    priceYear="R$ 28.800/ano"
                />
                <Quota
                    icon={imageDonate3}
                    info="Broze"
                    studentsNumber="3"
                    priceMonth="R$ 1.200/mês"
                    priceYear="R$ 14.400/ano"
                />
                <Quota
                    icon={imageDonate4}
                    info="Apoiador"
                    studentsNumber="1"
                    priceMonth="R$ 400/mês"
                    priceYear="R$ 4.800/ano"
                />
            </div>

            <div className={styles.quota__benefits}>
                <Title
                    text="Benefícios"
                    align="left"
                />

                <p className={styles.quota__benefits__paragraf}>
                    Divulgação da sua empresa em todos os meios de comunicação do instituto força jovem Bushido
                </p>
                <p className={styles.quota__benefits__paragraf}>
                    Possibilidade de pontes entre seus colaboradores e os alunos do instituto, estamos abertos para te receber e nossos alunos também podem ir até sua empresa
                </p>
                <p className={styles.quota__benefits__paragraf}>
                    Envio de relatórios trimetrais de atividades e relatório anual com os resultados alcançados, incluindo as demonstrações
                </p>
                <p className={styles.quota__benefits__paragraf}>
                    Os resultados e conquistas do instituto também são seus.
                </p>
            </div>
        </div>
    )
}

export default Index
