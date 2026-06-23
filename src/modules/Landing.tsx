import React from 'react';

import Image from 'next/image';
// Use public path string for Next/Image to avoid type import issues
import Link from 'next/link';

const Landing = () => {
    return (
        <section id='home' className='bg-gradient-to-b from-white/60 to-white/80'>
            <div className='container mx-auto flex flex-col-reverse items-center gap-8 px-6 py-16 lg:flex-row'>
                <div className='w-full text-center lg:w-1/2 lg:text-left'>
                    <h1 className='text-4xl font-extrabold text-slate-900 sm:text-5xl'>Dhanush Patel</h1>
                    <p className='mt-3 text-lg text-slate-700'>
                        Full-stack JavaScript Developer — building fast, accessible web apps.
                    </p>

                    <div className='mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start'>
                        <Link
                            href='#contact'
                            className='inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 focus:ring-2 focus:ring-slate-200 focus:outline-none'>
                            Contact Me
                        </Link>
                        <Link
                            href='/resume/Dhanush_Patel_Resume.pdf'
                            target='_blank'
                            className='inline-flex items-center rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-900 hover:bg-slate-50'>
                            Download Resume
                        </Link>
                    </div>
                </div>

                <div className='flex w-full justify-center lg:w-1/2 lg:justify-end'>
                    <div className='relative h-44 w-44 overflow-hidden rounded-full ring-1 ring-slate-200 sm:h-56 sm:w-56 lg:h-64 lg:w-64'>
                        <Image
                            src={'/images/profile_pic_2.jpeg'}
                            alt='Profile Pic'
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
