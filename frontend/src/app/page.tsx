"use client";

import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Send, MapPin, Calendar, User, Code, Briefcase } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Input } from "./components/ui/input";
import { Separator } from "./components/ui/separator";
import { cn } from "./lib/utils";
import { useMessage, MessageProvider } from "./MessageContext";
import Messagebar from "./components/Messagebar";
import Chatbox from "./components/Chatbox";

function HomeContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { messages } = useMessage();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-zinc-900 text-zinc-100 font-sans overflow-hidden">
      {/* Sidebar - Profile Information */}
      <aside
        className={cn(
          "w-full lg:w-72 bg-zinc-800 border-r border-zinc-700 transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "fixed inset-0 z-40 translate-x-0"
            : "fixed inset-0 z-40 -translate-x-full lg:static lg:translate-x-0"
        )}
      >
        <div className="h-full flex flex-col p-2 sm:p-3 space-y-2 sm:space-y-3 md:space-y-4 overflow-y-auto">
          {/* Mobile Close Button */}
          <div className="lg:hidden flex justify-end sticky top-0 bg-zinc-800 pb-2">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 sm:p-1.5 rounded-md hover:bg-zinc-700/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
            <Avatar className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-2 border-sky-400">
              <AvatarImage src="/pinkpanther.png" alt="Alejo Cagliolo" />
            </Avatar>
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold">Alejo Cagliolo</h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-zinc-400">Software Engineer Intern</p>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Basic Info */}
          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <Badge className="text-[10px] sm:text-xs md:text-sm bg-sky-400 text-zinc-900">CS Student</Badge>
              <Badge variant="outline" className="text-[10px] sm:text-xs md:text-sm border-sky-400/30 text-sky-400">
                Class of '28
              </Badge>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-zinc-400">
              <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sky-400" />
              <span>Austin, TX</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-zinc-400">
              <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sky-400" />
              <span>{currentDate}</span>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Education & Experience */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold flex items-center gap-1 sm:gap-2">
              <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sky-400" />
              Experience
            </h2>
            <div className="space-y-1 sm:space-y-1.5">
              <div className="bg-zinc-700/30 p-1 sm:p-1.5 rounded-md">
                <h3 className="font-medium text-[10px] sm:text-xs md:text-sm text-sky-400">Software Engineer Intern</h3>
                <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs text-zinc-400">
                  <img src="/vertikaltrans.png" alt="Vertikal X Logo" className="h-[42.5px] sm:h-[43px] md:h-[44px] w-auto" />
                  <span>Vertikal X — Present</span>
                </div>
              </div>
              <div className="bg-zinc-700/30 p-1 sm:p-1.5 rounded-md">
                <h3 className="font-medium text-[10px] sm:text-xs md:text-sm text-sky-400">Summer Intern</h3>
                <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs text-zinc-400">
                  <img src="/meshtrans.png" alt="Mesh Verify Logo" className="h-[32.5px] sm:h-[33px] md:h-[34px] w-auto" />
                  <span>Mesh Verify — Summer 2023</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Education */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold flex items-center gap-1 sm:gap-2">
              <Code className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sky-400" />
              Education
            </h2>
            <div className="space-y-1 sm:space-y-1.5">
              <div className="bg-zinc-700/30 p-1 sm:p-1.5 rounded-md">
                <h3 className="font-medium text-[10px] sm:text-xs md:text-sm text-sky-400">Bachelor of Science in Computer Science</h3>
                <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs text-zinc-400">
                  <img src="/purduelogo.png" alt="Purdue University Logo" className="h-2.5 sm:h-3 md:h-4 w-auto" />
                  <span>Purdue University — Class of 2028</span>
                </div>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-zinc-400 mt-0.5">Focus on Software Engineering and AI</p>
              </div>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Contact Links */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold">Contact</h2>
            <div className="space-y-1 sm:space-y-1.5">
              <a
                href="mailto:acagliolo@purdue.edu"
                className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-zinc-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sky-400" />
                <span>acagliolo@purdue.edu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alejo-cagliolo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-zinc-300 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-1 sm:gap-2 pt-0.5 sm:pt-1">
            <a
              href="https://www.linkedin.com/in/alejo-cagliolo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 p-0.5 sm:p-1 md:p-1.5 text-zinc-300 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
            >
              <Linkedin className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/acagliol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 p-0.5 sm:p-1 md:p-1.5 text-zinc-300 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
            >
              <Github className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:acagliolo@purdue.edu"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 p-0.5 sm:p-1 md:p-1.5 text-zinc-300 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
            >
              <Mail className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-[#1a1a1a] h-full">
        {/* Chat Header */}
        <header className="border-b border-zinc-800 py-2 px-3 bg-[#1a1a1a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="lg:hidden bg-zinc-800 p-1.5 rounded-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <User className="h-4 w-4 text-sky-400" />
              </button>
              <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-sky-400" />
              <h2 className="text-xs sm:text-sm font-semibold">Interactive Chat</h2>
            </div>
            <div className="text-[10px] sm:text-xs text-zinc-400">Ask me anything about my work and experience</div>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-3 bg-[#1a1a1a] scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          <div className="max-w-5xl mx-auto">
            <Chatbox />
          </div>
        </div>

        {/* Input Area */}
        <footer className="border-t border-zinc-800 py-2 px-3 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto">
            <Messagebar />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <MessageProvider>
      <HomeContent />
    </MessageProvider>
  );
}