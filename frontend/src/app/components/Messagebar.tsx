"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMessage } from "../MessageContext";
import { FaArrowRight } from "react-icons/fa6";

const Messagebar = () => {
  const [currMsg, setCurrMsg] = useState("");
  const { messages, setMessages } = useMessage();

  const getResponse = async () => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: currMsg }),
    });
    const data = await response.json();
    return data.answer;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currMsg.trim()) {
      const answer = await getResponse();
      setMessages([...messages, { question: currMsg, answer: answer }]);
    }
    setCurrMsg("");
  };

  return (
    <div className="flex w-full gap-2 text-2xl h-1/10">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 0.5,
          duration: 1,
        }}
        className="flex-1 border-2 border-accent hover:border-sky-400 transition duration-300 ease-in-out flex justify-between items-center bg-[#1a1a1a] rounded-lg p-1 h-16"
      >
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex items-center w-full rounded-lg text-lg sm:text-2xl">
            <input
              type="text"
              value={currMsg}
              className="w-full h-10 bg-[#1a1a1a] text-sky-400 placeholder-sky-400/50 focus:outline-none rounded-lg px-4"
              placeholder="Ask me anything ..."
              onChange={(e) => setCurrMsg(e.target.value)}
            />
            <button
              type="submit"
              className="flex justify-center items-center w-11 h-10 text-sky-400 hover:text-white transition duration-300 rounded-lg mr-1"
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Messagebar;
