const AlertsPage = () => {
  return (
    <div className="
      flex
      flex-col
      gap-6
      w-full
    ">
      <h2 className="text-3xl font-bold">
        Alertas del sistema
      </h2>

      <div className="
        bg-gray-800
        rounded-2xl
        p-6
        border
        border-gray-700
      ">
        No hay alertas activas actualmente.
      </div>
    </div>
  )
}

export default AlertsPage