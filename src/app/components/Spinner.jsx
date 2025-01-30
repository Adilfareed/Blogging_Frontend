import { motion } from 'framer-motion';

export default function Spinner() {
  return (
    <motion.div
      className="flex justify-center items-center mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 border-4 border-t-amber-950 border-gray-300 rounded-full animate-spin "></div>
    </motion.div>
  );
}
