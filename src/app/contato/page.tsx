import styles from "../../styles/contact.module.css"

import { Title } from "@/components/Title"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

const Page = () => {
    return (
        <main className={styles.contact}>
            <Title text="Contato" />
            <p className={styles.contact__description}>
                Caso tenha alguma dúvida ou queira entrar em contato direto conosco, por favor, preencha todos os campos obrigatórios, e em até 48 hrs o retornaremos por email.
            </p>

            <div className={styles.contact__content_inputs}>
                <Input text="Nome" height="65px" />
                <Input text="Sobrenome" height="65px" />
                <Input text="Email" height="65px" />
                <Input text="Telefone" height="65px" />
                <Input text="Assunto" height="65px" />
                <Input text="Mensagem" height="120px" />
            </div>

            <Button text="Enviar" gradient={false} center={true}     />
        </main>
    )
}

export default Page;