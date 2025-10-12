"use client";

export default function CatchesPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">釣果記録</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          新規登録
        </button>
      </div>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="魚種で検索..."
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <input
          type="date"
          className="px-4 py-2 border rounded-md"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">日付</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">魚種</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">サイズ</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">ルアー</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">場所</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                釣果記録がありません
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
