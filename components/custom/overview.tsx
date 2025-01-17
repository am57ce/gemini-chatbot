import { motion } from "framer-motion";
import Link from "next/link";

import { LogoGoogle, MessageIcon, VercelIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-24 sm:mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <LogoGoogle />
          <span>+</span>
          <MessageIcon />
        </p>
        <p>
          This is a Human Computer Interaction based Chatbot powered by the
          Google Gemini model built with Next.js by.
        </p>
        <ul className="flex flex-wrap sm:flex-nowrap gap-2 self-center mx-auto">
          <li className="flex flex-col items-start min-w-max px-2 py-1 rounded-lg bg-green-500 text-white">
            <span>Rehan Ahmed</span>
            <span>(22-CS-68)</span>
          </li>
          <li className="flex flex-col items-start min-w-max px-2 py-1 rounded-lg bg-green-500 text-white">
            <span>Habib Sultan</span>
            <span>(22-CS-67)</span>
          </li>
          {/* <li className="flex flex-col items-start min-w-max px-2 py-1 rounded-lg bg-green-500 text-white">
            <span>Arham Ali Khan</span>
            <span>(22-CS-95)</span>
          </li> */}
          <li className="flex flex-col items-start min-w-max px-2 py-1 rounded-lg bg-green-500 text-white">
            <span>Ashar Mehmood</span>
            <span>(22-CS-02)</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
