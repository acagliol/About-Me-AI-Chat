import { motion } from "framer-motion";

const Question = ({ question = "Tell me about yourself" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, x: 30 }}
      className="flex gap-2 justify-center items-center font-sans bg-[#1a1a1a] text-sky-400 text-xs sm:text-sm p-3 w-fit rounded-lg"
    >
      <h2>{question}</h2>
    </motion.div>
  );
};

export default Question;
