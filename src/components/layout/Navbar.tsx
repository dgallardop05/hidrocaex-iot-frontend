import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          HidroCaex IoT
        </h1>

        <div className={styles.status}>
          <div className={styles.indicator} />

          <span>Gateway Online</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar