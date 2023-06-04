"use client"
import Image from 'next/image'
import { useState } from 'react'
import {
    BsChevronLeft, BsChevronRight
} from '@/public/icons/ico'

const Slider: React.FC<{ images: any[] }> = ({ images }) => {
    const [activeImg, setActiveImg] = useState<number>(0)

    const move = (direction: number) => {
        const length: number = images.length

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
        <article className="slider-container">
            <button onClick={() => move(-1)}>
                <BsChevronLeft />
            </button>
            <div className="slider-img-container">
                {images.map((img: any, index: number) => {
                    let position: string = 'nextSlide'
                    if (index === activeImg) {
                        position = 'activeSlide'
                    }
                    if (index === activeImg - 1 || (activeImg === 0 && index === images.length - 1)) {
                        position = 'lastSlide'
                    }

                    return (
                        <div className={position} key={img.id}>
                            <Image src={img.img} alt={img.id}
                            className="photo" width={80} height={80}/>
                        </div>
                    )
                })}
            </div>
            <button onClick={() =>  move(1)}>
                <BsChevronRight />
            </button>
        </article>
    )
}

export default Slider