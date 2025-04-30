import Link from '../Link'
import styles from './Footer.module.css'

const FooterInstitucional = () => {
  return (
    <div className={styles.institucional}>
        <h4 className={styles.titulo}>Intitucional</h4>
        <Link className={styles.ancora} href='#'>
            Sobre nós
        </Link>
        <Link className={styles.ancora} href='#'>
            Para empresas
        </Link>
        <Link className={styles.ancora} href='#'>
            Clube fidelidade
        </Link>
    </div>
  )
}

export default FooterInstitucional