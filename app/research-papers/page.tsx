"use client";
import Link from 'next/dist/client/link'
import React from 'react'

const page = () => {

function BackgroundEffects() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"></div>
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px]"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-white/5 blur-[80px]"></div>
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
                <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
                <div className="absolute top-1/4 left-0 w-full h-px bg-white"></div>
                <div className="absolute top-2/4 left-0 w-full h-px bg-white"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-white"></div>
            </div>
            <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[150px] animate-[float_8s_ease-in-out_infinite_alternate]"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px] animate-[float_10s_ease-in-out_infinite_alternate_reverse]"></div>
            <style jsx>{`
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(-40px, 30px) scale(1.1); }
                }
            `}</style>
        </div>
    );
}



  return (
                <section className="relative min-h-screen bg-black flex items-center justify-center px-4">
                <BackgroundEffects />
                <div className="relative z-10 text-center">
                    <h2 className="text-white text-2xl font-bold">Page Under Development</h2>
                    <Link href="/" className="text-white/60 hover:text-white mt-4 inline-block">
                        ← Back to Home
                    </Link>
                </div>
            </section>
  )
}

export default page