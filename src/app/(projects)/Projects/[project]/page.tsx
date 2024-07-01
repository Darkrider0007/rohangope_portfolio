"use client"
import SmoothScroll from '@/components/smooth-scroll'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter()
    const params = useParams<{ project: string }>()
    return (
        <div
            className='mt-16 flex flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left'
        >
            <SmoothScroll>
                <h2 className='text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
                    My
                </h2>
            </SmoothScroll>
        </div>
    )
}

export default page