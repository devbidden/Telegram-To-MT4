"use client"
import Image from 'next/image'
import { useState } from 'react'
import images from '@/utils/images'


const Slider: React.FC = () => {
    const [activeImg, setActiveImg] = useState<number>(1)

    const move = (direction: number) => {
        const length = images.length

        if (direction === -1) {
            if (activeImg === 0) {
                setActiveImg(length - 1)
            } else {
                setActiveImg((prev: number) => prev - 1)
            }
        }

        if (direction === 1) {
            if (activeImg === length - 1) {
                setActiveImg(0)
            } else {
                setActiveImg((prev: number) => prev + 1)
            }
        }
    }

    return (
        <article>
            <button onClick={() => move(-1)}>Prev</button>
            {images.map((img: any) => (
                <Image src={img.img} key={img.id} width={80} height={80} alt={img.id}
                className={`${(activeImg !== (img.id - 1)) && "hidden"}`} />
            ))}
            <button onClick={() =>  move(1)}>Next</button>
        </article>
    )
}

export default Slider