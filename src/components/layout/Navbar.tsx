import styles
from './Navbar.module.css'

import {
  useLastUpdate,
} from '@/hooks/useLastUpdate'

import { useNavigate } from 'react-router-dom'

import {
  Wifi,
  RefreshCw,
  Clock3,
  LogOut,
} from 'lucide-react'

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem('token')

      window.location.replace('/login')
    }
  const {
    lastUpdate,
  } = useLastUpdate()

  const formattedTime =
    lastUpdate.toLocaleTimeString(
      'es-ES',
      {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      },
    )

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Depósitos Piornal
        </h1>

        <div className={styles.status}>
          <div className={styles.statusItem}>
            <div className={styles.indicator} />

            <Wifi size={16} />

            <span>
              Gateway Online
            </span>
          </div>

          <div className={styles.statusItem}>
            <RefreshCw
              size={15}
              className={styles.spin}
            />

            <span>
              Auto-refresh
            </span>
          </div>

          <div className={styles.statusItem}>
            <Clock3 size={15} />

            <span>
              {formattedTime}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            <LogOut size={15} />

            <span>
              Cerrar sesión
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar