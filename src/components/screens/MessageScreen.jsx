"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        You are not just my best friend — you are a part of my life that I can never imagine living without.
Sometimes I wonder how different my life would have been if you were not in it. You are more than a friend; you are someone who always stands by me, in every situation, whether times are good or difficult.
There is something truly special about you — your presence makes everything feel lighter and better. Your words, your support, and simply having you around mean more to me than I can fully express. 🤍
I may not always say it, but the truth is that I value you deeply. You are one of those rare people who come into life only once, and I am genuinely grateful that you are a part of mine.
Always remember, no matter what happens or where life takes us, I will always be there for you — in every phase, at every step.
                        Keep being the amazing person you are, spreading joy wherever you go. Wishing you endless happiness,
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
