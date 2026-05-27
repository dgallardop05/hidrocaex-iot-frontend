import { NavLink } from 'react-router-dom'

import {
  LayoutDashboard,
  TriangleAlert,
  Activity,
} from 'lucide-react'

import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logoContainer}>
          <div className={styles.logoGlow} />

          <Activity
            size={28}
            className={styles.logoIcon}
          />

          <h1 className={styles.logo}>
            HidroCaex IoT
          </h1>
        </div>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${
              isActive
                ? styles.active
                : ''
            }`
          }
        >
          <LayoutDashboard size={18} />

          <span>
            Dashboard
          </span>
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `${styles.link} ${
              isActive
                ? styles.active
                : ''
            }`
          }
        >
          <TriangleAlert size={18} />

          <span>
            Alertas
          </span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar