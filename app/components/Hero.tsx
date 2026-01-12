import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CARD */}
      <div className="bg-white rounded-2xl p-10 shadow-sm">
        <h1 className="text-3xl leading-snug text-gray-900">
          <span className="font-semibold">Welcome to Nimbus.</span>{" "}
          This is the example for the{" "}
          <span className="text-violet-600 font-medium">
            Next.js Learn Course
          </span>
          , brought to you by Nimbus.
        </h1>

<Link href="/login">
  <button className="mt-8 inline-flex items-center gap-3 bg-violet-600 text-white px-7 py-3 rounded-xl hover:bg-violet-700 transition hover:cursor-pointer">
          Log in
          <FiArrowRight size={18} />
        </button>
</Link>
      
      </div>

      {/* RIGHT PREVIEW */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <Image
            src="/heroImage.jpg"
            alt="Nimbus Dashboard"
            width={520}
            height={360}
            className="rounded-xl"
          />
        </div>
      </div>

    </section>
  );
}
