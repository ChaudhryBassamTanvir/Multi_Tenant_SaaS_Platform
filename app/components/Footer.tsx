import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bor bg-violet-600">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo2.png"
                alt="Nimbus Logo"
                width={200}
                height={200}
                className="rounded"
              />
              <span className="text-2xl font-semibold text-white">
                Nimbus
              </span>
            </div>
            <p className="mt-4 text-sm text-white leading-relaxed">
              Nimbus is a modern Next.js example app designed
              to help you learn and build beautiful interfaces
              faster.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-medium text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-white">
              <li className="hover:text-violet-600 cursor-pointer">Features</li>
              <li className="hover:text-violet-600 cursor-pointer">Pricing</li>
              <li className="hover:text-violet-600 cursor-pointer">Docs</li>
              <li className="hover:text-violet-600 cursor-pointer">Updates</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white">
              <li className="hover:text-violet-600 cursor-pointer">About</li>
              <li className="hover:text-violet-600 cursor-pointer">Blog</li>
              <li className="hover:text-violet-600 cursor-pointer">Careers</li>
              <li className="hover:text-violet-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">
              Follow us
            </h4>
            <div className="flex gap-4 text-white">
              <FaGithub className="hover:text-violet-600 cursor-pointer" size={18} />
              <FaTwitter className="hover:text-violet-600 cursor-pointer" size={18} />
              <FaLinkedin className="hover:text-violet-600 cursor-pointer" size={18} />
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
          <p>© {new Date().getFullYear()} Nimbus. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-violet-600 cursor-pointer">Privacy</span>
            <span className="hover:text-violet-600 cursor-pointer">Terms</span>
            <span className="hover:text-violet-600 cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
