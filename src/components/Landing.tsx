/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from "next/image"
import landingImage from "/public/images/profile 2.jpeg"
import Loading from "./Loading"

const Landing = () => {
    return (
        <div className="landing-style-display-container landing-style-content landing-style-wide" id="home">
            <Image className="landing-style-image" src={landingImage} alt="Profile Pic" placeholder="blur" />
            <div className="landing-style-display-middle landing-style-margin-top landing-style-center">
                <h1 className="landing-style-xxlarge landing-style-text-black">
                    <span className="landing-style-padding landing-style-black landing-style-opacity-min">
                        <b>Dhanush Patel</b>
                    </span>
                    <br />
                    <span className="landing-style-hide-small landing-style-text-dark-grey">Software Developer</span>
                </h1>
            </div>
        </div>
    )
}

export default Landing
