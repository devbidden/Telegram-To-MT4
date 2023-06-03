"use client"
import Image from 'next/image'
import WordFlick from '@/components/WordFlick'
import Accordion from '@/components/Accordion'

export default function Home() {
  return (
    <main className="mt-36 w-[95vw] max-w-[600px] min-h-[100vh] mx-auto">
      <section className="w-full mx-auto text-center">
        <h1 className="font-semibold text-2xl md:text-3xl text-clr-2">
          #1 Telegram to Mt4 Bot
        </h1>
        <WordFlick words={[
          "Automate Your Trading. Amplify Your Profits.",
          "Trade Smarter, Not Harder. Harness the Power of Automation.",
          "Unleash the Power of Automation. Elevate Your Trading Success.",
          "Transform Your Trading with our Telegram to MT4 Bot.",
          "Experience Next-Level Trading with our Bot for MT4.",
          "Supercharge Your Trades with our Telegram to MT4 Bot.",
          "Simplify Your Trading Journey with Automation and Precision.",
          "Take Control of Your Trading. Let our Bot Do the Rest.",
          "Effortless Trading. Maximum Returns. Discover our Bot Today.",
          "Unlock Your Trading Potential with our Telegram to MT4 Bot."
        ]}
        styles='text-clr-8 font-medium md:text-lg' />
      </section>
      <section className="flex flex-col items-center mt-10 gap-5">
        <article className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-center tracking-widest">
            Features
          </h2>
          <div className="bg-clr-4 rounded-lg w-[3rem] h-[0.3125rem]"></div>
        </article>
        <Accordion />
      </section>
      {/* <section>
        <video controls src="https://youtu.be/kRsqhtYq5MA" />
      </section> */}
    </main>
  )
}
