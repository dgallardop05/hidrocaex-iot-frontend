const ServerOffline = () => {
  return (
    <div className="
      flex
      flex-col
      items-center
      justify-center
      gap-6

      min-h-screen

      text-white
    ">
      <div className="
        w-20
        h-20

        rounded-full

        bg-red-500/20

        flex
        items-center
        justify-center
      ">
        <div className="
          w-8
          h-8

          rounded-full

          bg-red-500
        " />
      </div>

      <div className="
        flex
        flex-col
        items-center
        gap-2
      ">
        <h1 className="
          text-4xl
          font-bold
        ">
          Servidor en mantenimiento
        </h1>

        <p className="
          text-gray-400
          text-lg
        ">
          Reconectando automáticamente...
        </p>
      </div>
    </div>
  )
}

export default ServerOffline