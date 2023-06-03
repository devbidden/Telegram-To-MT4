import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Accordion() {
    return (
        <div className="mx-auto w-full rounded-2xl bg-white p-2">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="disclosure-btn">
                            <span>Powerful Trading Simplified: Automate Your Success</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-clr-2`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="disclosure-panel">
                            {`Unleash the potential of your trading strategies with our cutting-edge Telegram to MT4 bot. Say goodbye to manual trading and let our bot work tirelessly for you, executing trades with precision and efficiency. Join the revolution and take control of your trading success today!`}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="disclosure-btn">
                            <span>Revolutionize Your Trading Experience with Our Telegram to MT4 Bot</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-clr-2`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="disclosure-panel">
                            {`Discover the ultimate tool that will transform the way you trade. Our Telegram to MT4 bot empowers you with automated trading capabilities, allowing you to capitalize on market opportunities 24/7. Take your trading to new heights and experience the thrill of consistent profits. Get started now!`}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="disclosure-btn">
                            <span>Maximize Your Profits with our Telegram to MT4 Bot</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-clr-2`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="disclosure-panel">
                            Unlock the true potential of your trading strategies with our state-of-the-art Telegram to MT4 bot. Seamlessly integrate your Telegram signals with your MT4 platform and enjoy hands-free trading like never before. Experience increased profitability, enhanced risk management, and unparalleled convenience. Get your bot today and elevate your trading game!
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="disclosure-btn">
                            <span>Your Personal Trading Assistant: Telegram to MT4 Bot</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-clr-2`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="disclosure-panel">
                            Take advantage of the latest technology and gain an unfair advantage in the market. Our Telegram to MT4 bot acts as your personal trading assistant, executing trades based on your signals and strategies. With customizable settings, real-time notifications, and a user-friendly interface, achieving trading success has never been easier. Start automating your trades now!
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="disclosure-btn">
                            <span>Trade Smarter, Not Harder: Introducing our Telegram to MT4 Bot</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-clr-2`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="disclosure-panel">
                            {`Don't let manual trading hold you back from achieving your financial goals. Our Telegram to MT4 bot is designed to simplify your trading journey by automating your trades with lightning-fast execution. Embrace efficiency, eliminate emotions, and watch your profits soar. Join the ranks of successful traders today!`}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
