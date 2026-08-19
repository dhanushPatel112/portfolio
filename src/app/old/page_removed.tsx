'use client'

import About from "@/modules/About"
import Certification from "@/modules/Certification"
import Education from "@/modules/Education"
import Internship from "@/modules/Internship"
import Landing from "@/modules/Landing"
import Navbar from "@/modules/Navbar"
import Projects from "@/modules/Projects"
import Work from "@/modules/Work"
import Skills from "@/modules/Skills"
import Contact from "@/modules/Contact"
import { useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getAnalytics, isSupported } from "firebase/analytics"
import Clarity from "@microsoft/clarity"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "personal-portfolio-4a24c.firebaseapp.com",
    projectId: "personal-portfolio-4a24c",
    storageBucket: "personal-portfolio-4a24c.appspot.com",
    messagingSenderId: "311883681974",
    appId: "1:311883681974:web:cc35ae087130270b879617",
    measurementId: "G-RPK8F3R5GR",
}

export default function Page() {
    useEffect(() => {
        // only in browser + production
        if (typeof window === "undefined") return
        if (process.env.NODE_ENV !== "production") return

        // Firebase
        if (process.env.NEXT_PUBLIC_API_KEY) {
            const app = initializeApp(firebaseConfig)

            isSupported().then((ok) => {
                if (ok) getAnalytics(app)

                return;
            }).catch(() => { })
        }

        // Microsoft Clarity
        if (process.env.NEXT_PUBLIC_CLARITY_ID) {
            Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID)
        }
    }, [])

    return <>
        <Navbar />
        <Landing />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Certification />
        <Internship />
        <Education />
        <Contact />
    </>
};

