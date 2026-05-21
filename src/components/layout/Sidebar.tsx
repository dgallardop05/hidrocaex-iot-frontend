import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.logo}>
        HidroCaex IoT
      </h1>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          Alertas
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar