import type { Deposit } from '@/types/deposit.types'

import styles from './DepositCard.module.css'

import { Link } from 'react-router-dom'

interface Props {
  deposit: Deposit
}

const DepositCard = ({ deposit }: Props) => {
  const getStatusConfig = () => {
    switch (deposit.status) {
      case 'NORMAL':
        return {
          className: styles.normal,
          label: 'NORMAL',
        }

      case 'NIVEL_MINIMO':
        return {
          className: styles.warning,
          label: 'NIVEL BAJO',
        }

      case 'NIVEL_CRITICO':
        return {
          className: styles.critical,
          label: 'CRÍTICO',
        }

      case 'OFFLINE':
        return {
          className: styles.offline,
          label: 'OFFLINE',
        }

      default:
        return {
          className: styles.offline,
          label: deposit.status,
        }
    }
  }

const status =
  getStatusConfig()

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
            ${status.className}
          `}>
            {status.label}
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
                {deposit.waterLevelCm.toFixed(1)} cm
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                Porcentaje
              </span>

              <span className={styles.value}>
                {deposit.percentage.toFixed(1)}%
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                Litros
              </span>

              <span className={styles.value}>
                {(deposit.liters ?? 0)
                   .toLocaleString()} L
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
                {deposit.rssi} dBm
              </span>
            </div>

            <div className={styles.metric}>
              <span className={styles.label}>
                SNR
              </span>

              <span className={styles.value}>
                {deposit.snr} dB
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