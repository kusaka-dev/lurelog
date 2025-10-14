import Link from "next/link";

export default function LureDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <div className="flex justify-end items-center mb-6">
        <div className="flex gap-2">
          <Link
            href={`/lures/${params.id}/edit`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            編集
          </Link>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            削除
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-400">画像なし</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">基本情報</h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm text-gray-500">ルアー名</dt>
              <dd className="font-semibold">-</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">ブランド</dt>
              <dd className="font-semibold">-</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">カテゴリ</dt>
              <dd className="font-semibold">-</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">サイズ</dt>
              <dd className="font-semibold">-</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">カラー</dt>
              <dd className="font-semibold">-</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">価格</dt>
              <dd className="font-semibold">-</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">状態</dt>
              <dd className="font-semibold">-</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">釣果記録</h2>
        <p className="text-gray-500">釣果記録がありません</p>
      </div>
    </div>
  );
}
