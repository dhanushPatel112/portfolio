import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
        return NextResponse.json(
            { message: "Missing required fields" },
            { status: 400 }
        )
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `New message from ${name}`,
            text: `You got a new message!\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
        <h3>New Message from Portfolio</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
        })

        return NextResponse.json({ message: "Message sent successfully" })
    } catch (err) {
        console.error("Email sending failed:", err)

        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        )
    }
}

// optional: block non-POST
export async function GET() {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
}
