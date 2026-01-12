import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-violet-600 rounded-xl px-6 py-4">
      <div className="flex items-center gap-3">
        <Image
          src="/logo2.png"
          alt="Nimbus Logo"
          width={200}
          height={200}
          className="rounded"
        />
        <span className="text-white text-5xl font-semibold">
          Nimbus
        </span>
      </div>
    </header>
  );
}
