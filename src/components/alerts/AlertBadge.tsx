import type { AlertSeverity } from '@/types/alert.types'

interface Props {
  severity: AlertSeverity
}

const AlertBadge = ({
  severity,
}: Props) => {
  const getStyles = () => {
    switch (severity) {
      case 'INFO':
        return 'bg-blue-600'

      case 'WARNING':
        return 'bg-yellow-600'

      case 'CRITICAL':
        return 'bg-red-700'
    }
  }

  return (
    <span className={`
      px-3
      py-1
      rounded-full
      text-sm
      font-semibold
      ${getStyles()}
    `}>
      {severity}
    </span>
  )
}

export default AlertBadge