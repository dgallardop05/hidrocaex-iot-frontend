interface Props {
  title: string
  value: string
  subtitle?: string
}

const KpiCard = ({
  title,
  value,
  subtitle,
}: Props) => {
  return (
    <div className="
      relative

      flex
      flex-col

      gap-2

      p-6

      rounded-3xl

      overflow-hidden

      bg-gradient-to-br
      from-slate-800
      to-slate-900

      border
      border-blue-900/30

      shadow-xl
      shadow-black/30

      min-w-[220px]

      flex-1
    ">
      <div className="
        absolute
        top-0
        left-0

        w-full
        h-[2px]

        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-cyan-400
      " />

      <span className="
        text-sm
        uppercase
        tracking-wider

        text-gray-400
      ">
        {title}
      </span>

      <span className="
        text-4xl
        font-black

        text-white
      ">
        {value}
      </span>

      {subtitle && (
        <span className="
          text-sm
          text-gray-500
        ">
          {subtitle}
        </span>
      )}
    </div>
  )
}

export default KpiCard