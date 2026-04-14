import { motion } from "motion/react";
import { Home, Search } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f2fe] to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FAC778] to-[#885113]">
              404
            </div>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold text-[#1a1a2e] mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-600 mb-8 leading-relaxed"
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home size={20} />
              Go Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="secondary" size="lg">
              <Search size={20} />
              Browse Products
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500">
            Need help? <Link to="/contact" className="text-[#FAC778] hover:underline">Contact us</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
