import Image from "next/image"
import React from "react"

type LoadingProps = {
    imageSrc: string
}

const Loading = ({ imageSrc }: LoadingProps) => {
    return <Image src={imageSrc} alt="Loading" />
}

export default Loading
