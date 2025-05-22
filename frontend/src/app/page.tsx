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
    <div className="flex flex-col lg:flex-row min-h-screen bg-zinc-900 text-zinc-100 font-sans">
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-zinc-800 p-2 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <User className="h-5 w-5 text-sky-400" />
      </button>

      {/* Sidebar - Profile Information */}
      <aside
        className={cn(
          "w-full lg:w-80 bg-zinc-800 border-r border-zinc-700 overflow-y-auto transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "fixed inset-0 z-40 translate-x-0"
            : "fixed inset-0 z-40 -translate-x-full lg:static lg:translate-x-0"
        )}
      >
        <div className="p-6 space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="h-24 w-24 border-2 border-sky-400">
              <AvatarFallback className="text-2xl bg-sky-400 text-zinc-900">AC</AvatarFallback>
              <AvatarImage src="/avatar.png" alt="Alejo Cagliolo" />
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Alejo Cagliolo</h1>
              <p className="text-zinc-400">Software Engineer Intern</p>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Basic Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-sky-400 text-zinc-900">CS Student</Badge>
              <Badge variant="outline" className="border-sky-400/30 text-sky-400">
                Class of '28
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <MapPin className="h-4 w-4 text-sky-400" />
              <span>Austin, TX</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Calendar className="h-4 w-4 text-sky-400" />
              <span>{currentDate}</span>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Education & Experience */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-sky-400" />
              Experience
            </h2>
            <div className="space-y-3">
              <div className="bg-zinc-700/30 p-3 rounded-md">
                <h3 className="font-medium text-sky-400">Software Engineer Intern</h3>
                <p className="text-sm text-zinc-400">Vertikal X — Present</p>
              </div>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Code className="h-4 w-4 text-sky-400" />
              Education
            </h2>
            <div className="space-y-3">
              <div className="bg-zinc-700/30 p-3 rounded-md">
                <h3 className="font-medium text-sky-400">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-zinc-400">Purdue University — Class of 2028</p>
                <p className="text-sm text-zinc-400 mt-1">Focus on Software Engineering and AI</p>
              </div>
            </div>
          </div>

          <Separator className="bg-zinc-700" />

          {/* Contact Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className="space-y-2">
              <a
                href="mailto:acagliolo@purdue.edu"
                className="flex items-center gap-2 text-zinc-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-sky-400" />
                <span>acagliolo@purdue.edu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alejo-cagliolo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-2 pt-4">
            <a
              href="https://www.linkedin.com/in/alejo-cagliolo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 p-2 text-zinc-300 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/acagliol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 p-2 text-zinc-300 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:acagliolo@purdue.edu"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 p-2 text-zinc-300 hover:bg-sky-400/10 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-[#1a1a1a]">
        {/* Chat Header */}
        <header className="border-b border-zinc-800 py-4 px-6 bg-[#1a1a1a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-sky-400" />
              <h2 className="font-semibold">Interactive Chat</h2>
            </div>
            <div className="text-sm text-zinc-400">Ask me anything about my work and experience</div>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <Chatbox />
          </div>
        </div>

        {/* Input Area */}
        <footer className="border-t border-zinc-800 py-4 px-6 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
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