import DepositCard from '@/components/dashboard/DepositCard'
import { mockDeposits } from '@/constants/mockDeposits'

const DashboardPage = () => {
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

      <div className="
        flex
        flex-wrap
        gap-6
      ">
        {mockDeposits.map((deposit) => (
          <DepositCard
            key={deposit.id}
            deposit={deposit}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardPage