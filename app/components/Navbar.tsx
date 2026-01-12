import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-violet-600 rounded-xl px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center gap-1 sm:gap-2">
        <Image
          src="/logo2.png"
          alt="Nimbus Logo"
          width={250}
          height={250}
          className="w-32"
        />

        <span className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">
          Nimbus
        </span>
      </div>
    </header>
  );
}
