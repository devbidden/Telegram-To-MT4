import { Inter, Questrial } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const questrial = Questrial({
    weight: '400',
    subsets: ['latin']
})

export { inter, questrial }