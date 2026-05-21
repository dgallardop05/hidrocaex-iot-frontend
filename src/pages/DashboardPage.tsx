const DashboardPage = () => {
  return (
    <div className="
      flex
      flex-col
      gap-4
      w-full
    ">
      <h2 className="text-3xl font-bold">
        Dashboard General
      </h2>

      <div className="
        flex
        flex-wrap
        gap-4
      ">
        <div className="
          bg-gray-800
          rounded-xl
          p-6
          min-w-[300px]
          flex-1
        ">
          Depósito 1
        </div>

        <div className="
          bg-gray-800
          rounded-xl
          p-6
          min-w-[300px]
          flex-1
        ">
          Depósito 2
        </div>
      </div>
    </div>
  )
}

export default DashboardPage