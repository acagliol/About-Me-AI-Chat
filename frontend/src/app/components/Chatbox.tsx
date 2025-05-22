"use client";
import Messagebar from "./Messagebar";
import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { useMessage } from "../MessageContext";

const Chatbox = () => {
  const { messages } = useMessage();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div className="overflow-y-auto flex flex-col justify-left items-start w-full h-4/10 sm:h-1/2 gap-12 text-base sm:text-xl bg-[#1a1a1a]">
      <div className="space-y-8">
        {messages &&
          messages.map(
            (
              { question, answer }: { question: string; answer: string },
              index: number
            ) => {
              scrollToBottom();
              return (
                <Message
                  question={question}
                  msg={answer}
                  key={index}
                  scrollToBottom={scrollToBottom}
                />
              );
            }
          )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Chatbox;
