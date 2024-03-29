import styles from "../../styles/transparency.module.css"

import { Title } from "@/components/Title";
import { Report } from "@/components/Report";

import preview1 from "../../assets/img/transparency/preview1.png"
import preview2 from "../../assets/img/transparency/preview2.png"
import preview3 from "../../assets/img/transparency/preview3.png"
import preview4 from "../../assets/img/transparency/preview4.png"
import preview5 from "../../assets/img/transparency/preview5.png"

const Page = () => {
    return (
        <main className={styles.transparency}>
            <Title text="Transparência" align={"center"} />

            <div className={styles.transparency__content}>
                <Report
                    title="Estatuto social"
                    description="Estatuto social é o nível de valor social que uma pessoa é considerada a possuir. Mais especificamente, refere-se ao nível relativo de respeito, honra, competência e influência concedida a pessoas, grupos e organizações em uma sociedade."
                    imagePreview={preview1}
                    reportName="ESTATUTO ATUALIZADO EM 2022 REFORMA DO ESTATUTO0001-1.pdf"
                />

                <Report
                    title="Balanço, balancete e DRE 2022/2023"
                    description="Balanço patrimonial e DRE são relatórios contábeis que as empresas devem elaborar. Trata-se de um dever previsto em lei,   que exige a entrega dos relatórios por toda pessoa jurídica registrada no Brasil ao final de cada exercício social"
                    imagePreview={preview2}
                    reportName="BALANCO-BALANCETE-E-DRE.pdf"
                />

                <Report
                    title="Relatório anual"
                    description="Relatório Anual é uma publicação que apresenta as informações institucionais, os resultados e metas e os indicadores qualitativos e quantitativos referentes às atividades das empresas durante o período anual do exercício anterior."
                    imagePreview={preview3}
                    reportName="RELATORIO-ANUAL.pdf"
                />

                <Report
                    title="Relatório Conselho Fiscal 2023"
                    description="O relatório do conselho fiscal é aquele que inclui todas as questões relativas à apreciação das contas do síndico. Também chamado de parecer, ele traz eventuais ressalvas à aprovação ou à rejeição das contas apresentadas pelo síndico naquele exercício."
                    imagePreview={preview4}
                    reportName="PARECR-DO-CONSELHO-FISCAL-2022-A-2023.pdf"
                />

                <Report
                    title="Ato de nomeação da diretoria"
                    description="Ato que marca o início da investidura no cargo público, efetivo ou comissionado, que se completa com a posse e o exercício - realizados simultaneamente."
                    imagePreview={preview5}
                    reportName="ATA DE ELEIÇÃO 2023 A 2027.pdf"
                />
            </div>
        </main>
    )
}

export default Page;