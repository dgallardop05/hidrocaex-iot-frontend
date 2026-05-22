import DepositCard from '@/components/dashboard/DepositCard'
import WaterLevelChart from '@/components/dashboard/WaterLevelChart'
import { mockHistory } from '@/constants/mockHistory'
import { useDeposits } from '@/hooks/useDeposits'
import AlertsPanel from '@/components/alerts/AlertsPanel'
import { useAlerts } from '@/hooks/useAlerts'

const DashboardPage = () => {
  const {
    deposits,
    loading,
  } = useDeposits()

  const {
    alerts,
  } = useAlerts(deposits)

  if (loading) {
    return (
      <div className="text-white">
        Cargando depósitos...
      </div>
    )
  }

  return (
    <div className="
      flex
      flex-col
      gap-6
      w-full
    ">
      <div className="
        flex
        flex-col
        gap-2
      ">
        <h2 className="text-3xl font-bold">
          Dashboard General
        </h2>

        <p className="text-gray-400">
          Monitorización de depósitos hidráulicos
        </p>
      </div>

      <AlertsPanel alerts={alerts} />

      <div className="
        flex
        flex-wrap
        gap-6
      ">
        {deposits.map((deposit) => (
          <DepositCard
            key={deposit.id}
            deposit={deposit}
          />
        ))}
      </div>

      <div className="
        flex
        flex-col
        gap-4
      ">
        <h3 className="text-2xl font-semibold">
          Histórico general
        </h3>

        <WaterLevelChart
          title="Histórico general"
          data={mockHistory['1']}
        />
      </div>
    </div>
  )
}

export default DashboardPage