"use client"
import Slider from '@/components/Slider'
import WordFlick from '@/components/WordFlick'
import Accordion from '@/components/Accordion'

export default function Home() {
  return (
    <main className="mt-36 mb-10 w-[95vw] max-w-[600px] min-h-[100vh] mx-auto px-5">
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
        styles='text-clr-8 font-medium md:text-lg h-[1rem]' />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L18.5,224C36.9,224,74,224,111,218.7C147.7,213,185,203,222,181.3C258.5,160,295,128,332,122.7C369.2,117,406,139,443,154.7C480,171,517,181,554,176C590.8,171,628,149,665,165.3C701.5,181,738,235,775,261.3C812.3,288,849,288,886,261.3C923.1,235,960,181,997,176C1033.8,171,1071,213,1108,240C1144.6,267,1182,277,1218,245.3C1255.4,213,1292,139,1329,112C1366.2,85,1403,107,1422,117.3L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
      </section>
      <section>
        <Slider />
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
      <section className="mt-10">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kRsqhtYq5MA" title="Telegram to MT4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </main>
  )
}
