"use client";

export default function BrandsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">ブランド管理</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          新規登録
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="ブランド名で検索..."
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">ブランド名</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">国</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">ウェブサイト</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">ルアー数</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                ブランドが登録されていません
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
