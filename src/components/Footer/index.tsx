import styles from "./style.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.footer__title}>Oficinas</h3>

            <address className={styles.footer__address}>
                <span>
                    local: Shopping Zília, Rua Interventor Santos Neves, nº 125, Fundão – ES
                </span>
            </address>

            <address className={styles.footer__address}>
                <span>
                    Rua Interventor Santos Neves, nº 125, Fundão - ES
                </span>
            </address>

            <span className={styles.footer__phone}>(27) 99925-5857</span>

            <span className={styles.footer__email}>contato@institutobushido.org.br</span>
        </footer>
    )
}
