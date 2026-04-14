import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-gradient-to-br from-[#FAC778] to-[#885113] flex items-center justify-center">
                <div className="size-6 rounded-lg bg-white" />
              </div>
              <span className="text-lg font-bold">Novarix Healthcare</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Innovating healthcare for a better tomorrow through quality pharmaceutical solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/manufacturing" className="text-sm text-gray-400 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-gray-400">Tablets</span></li>
              <li><span className="text-sm text-gray-400">Capsules</span></li>
              <li><span className="text-sm text-gray-400">Syrups</span></li>
              <li><span className="text-sm text-gray-400">Injections</span></li>
              <li><span className="text-sm text-gray-400">Ointments</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>123 Medical Park, Healthcare City, HC 12345</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={18} className="shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={18} className="shrink-0 mt-0.5" />
                <span>info@novarixhealth.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 Novarix Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
