"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col gap-4">
      <motion.a
        href="https://wa.me/#" // Replace with actual number
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 group"
      >
        <MessageCircle className="w-8 h-8 transition-transform group-hover:rotate-12" />
        <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl text-sm font-bold text-neutral-900 border border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          WhatsApp Chat
        </span>
      </motion.a>

      <motion.a
        href="https://t.me/#" // Replace with actual handle
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#0088cc] text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-400/40 group"
      >
        <Send className="w-7 h-7 -translate-x-0.5 translate-y-0.5 transition-transform group-hover:rotate-12" />
        <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl text-sm font-bold text-neutral-900 border border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Telegram
        </span>
      </motion.a>
    </div>
  );
}
