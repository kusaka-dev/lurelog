"use client";

export default function LureEditPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ルアー編集</h1>

      <form className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">ルアー名 *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">ブランド *</label>
            <select required className="w-full px-4 py-2 border rounded-md">
              <option value="">選択してください</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">カテゴリ *</label>
            <select required className="w-full px-4 py-2 border rounded-md">
              <option value="">選択してください</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">長さ (mm)</label>
            <input type="number" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">重量 (g)</label>
            <input
              type="number"
              step="0.01"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">カラー</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">価格 (円)</label>
            <input type="number" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">購入日</label>
            <input type="date" className="w-full px-4 py-2 border rounded-md" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">購入店舗</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">状態</label>
          <select className="w-full px-4 py-2 border rounded-md">
            <option value="NEW">新品</option>
            <option value="USED">使用済み</option>
            <option value="DAMAGED">破損</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">画像</label>
          <input type="file" accept="image/*" className="w-full" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">メモ</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
        </div>

        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="px-6 py-2 border rounded-md hover:bg-gray-50"
          >
            キャンセル
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            更新
          </button>
        </div>
      </form>
    </div>
  );
}
