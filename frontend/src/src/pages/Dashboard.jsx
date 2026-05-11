export default function Dashboard() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        Viva Tracking Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">
            Active Viva Cases
          </h2>

          <p className="text-5xl font-bold mt-4">
            128
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">
            Pending Reports
          </h2>

          <p className="text-5xl font-bold mt-4">
            34
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">
            Completed Viva
          </h2>

          <p className="text-5xl font-bold mt-4">
            21
          </p>
        </div>
      </div>
    </div>
  )
}
