export default function DashboardPage() {
  return (
    <div className="pt-10 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">登録ルアー総数</h2>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">釣果記録</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">最近追加したルアー</h2>
          <p className="text-gray-500">データがありません</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">最近の釣果記録</h2>
          <p className="text-gray-500">データがありません</p>
        </div>
      </div>
    </div>
  );
}
