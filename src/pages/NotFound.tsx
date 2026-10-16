import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <AlertTriangle size={28} className="text-primary" />
          </div>

          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-xl font-semibold mb-3">Page Not Found</h2>
          <p className="text-text-muted mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
