import Link from "next/link";

export default function LuresPage() {
  return (
    <div className="p-8">
      <div className="flex justify-end items-center mb-6">
        <Link
          href="/lures/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          新規登録
        </Link>
      </div>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="ルアー名で検索..."
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <select className="px-4 py-2 border rounded-md">
          <option value="">ブランドで絞り込み</option>
        </select>
        <select className="px-4 py-2 border rounded-md">
          <option value="">カテゴリで絞り込み</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 text-center text-gray-500">
          ルアーが登録されていません
        </div>
      </div>
    </div>
  );
}
