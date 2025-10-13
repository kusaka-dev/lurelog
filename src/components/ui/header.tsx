import Image from "next/image";

export function Header() {
  return (
    <>
      <header className="border-b-2 border-gray-200">
        <div className="flex justify-between max-w-336 m-auto py-4">
          <Image
            src="/common/pic_logo.svg"
            alt="lure.log"
            width={111}
            height={32}
          />
          <Image
            src="/header/pic_profile.webp"
            alt="プロフィール写真"
            width={40}
            height={40}
          />
        </div>
      </header>
    </>
  );
}
