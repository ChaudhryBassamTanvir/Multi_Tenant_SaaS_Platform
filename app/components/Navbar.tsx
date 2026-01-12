import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-violet-600 rounded-xl px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <Image
          src="/logo2.png"
          alt="Nimbus Logo"
          width={400}
          height={400}
          className="rounded w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        />

        <span className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">
          Nimbus
        </span>
      </div>
    </header>
  );
}
