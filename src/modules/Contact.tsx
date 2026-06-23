'use client';
import React, { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        setStatus('Sending...');

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            setStatus('Message sent successfully!');
            form.reset();
        } else {
            setStatus('Failed to send. Try again later.');
        }
    }

    return (
        <section id='contact' className='bg-white py-12'>
            <div className='container mx-auto max-w-3xl px-6'>
                <h2 className='mb-4 text-center text-3xl font-bold text-slate-900'>Get in touch</h2>
                <p className='mb-6 text-center text-slate-700'>
                    Interested in working together or have a question? Send me a message or download my resume.
                </p>

                <div className='rounded-lg bg-slate-50 p-6 shadow-sm'>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                        <label className='flex flex-col'>
                            <span className='text-sm text-slate-700'>Name</span>
                            <input className='mt-1 rounded-md border p-2' type='text' name='name' required />
                        </label>

                        <label className='flex flex-col'>
                            <span className='text-sm text-slate-700'>Email</span>
                            <input className='mt-1 rounded-md border p-2' type='email' name='email' required />
                        </label>

                        <label className='flex flex-col'>
                            <span className='text-sm text-slate-700'>Message</span>
                            <textarea className='mt-1 rounded-md border p-2' name='message' rows={4} required />
                        </label>

                        <div className='mt-1 flex items-center gap-3'>
                            <button
                                type='submit'
                                className='inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800'>
                                Send message
                            </button>
                            <a
                                className='inline-flex items-center text-sm text-slate-700 hover:underline'
                                href='/resume/Dhanush_Patel_Resume.pdf'
                                target='_blank'
                                rel='noreferrer'>
                                Download resume
                            </a>
                        </div>
                    </form>
                    {status && <p className='mt-3 text-sm text-slate-700'>{status}</p>}
                </div>
            </div>
        </section>
    );
}
