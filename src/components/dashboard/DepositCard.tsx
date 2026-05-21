import type { Deposit } from '@/types/deposit.types'

import styles from './DepositCard.module.css'

import { Link } from 'react-router-dom'

interface Props {
  deposit: Deposit
}

const DepositCard = ({ deposit }: Props) => {
  const getStatusClass = () => {
    switch (deposit.status) {
      case 'NORMAL':
        return styles.normal

      case 'WARNING':
        return styles.warning

      case 'CRITICAL':
        return styles.critical

      case 'OFFLINE':
        return styles.offline
    }
  }

  return (
    <Link
      to={`/deposit/${deposit.id}`}
      className={styles.link}
    >
      <article className={styles.card}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            {deposit.name}
          </h3>

          <div className={`
            ${styles.status}
            ${getStatusClass()}
          `}>
            {deposit.status}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.tankContainer}>
            <div
              className={styles.water}
              style={{
                height: `${deposit.percentage}%`,
              }}
            />
          </div>

          <div className={styles.info}>
            <div className={styles.metric}>
              <span className={styles.label}>
                Nivel
              </span>

              <span className={styles.value}>
                {deposit.waterLevelCm} cm
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                Porcentaje
              </span>

              <span className={styles.value}>
                {deposit.percentage}%
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                Litros
              </span>

              <span className={styles.value}>
                {deposit.liters.toLocaleString()} L
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                Batería
              </span>

              <span className={styles.value}>
                {deposit.battery}%
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                RSSI
              </span>

              <span className={styles.value}>
                {deposit.rssi}
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                Última actualización
              </span>

              <span className={styles.value}>
                {deposit.updatedAt}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default DepositCard