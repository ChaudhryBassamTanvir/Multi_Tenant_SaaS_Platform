import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-violet-600 rounded-xl px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo2.png"
            alt="Nimbus Logo"
            width={200}
            height={200}
            className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 object-contain"
          />
        </div>

        {/* App Name */}
        <span className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Nimbus
        </span>
      </div>
    </header>
  );
}
