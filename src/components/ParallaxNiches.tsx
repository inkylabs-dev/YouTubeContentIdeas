"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import easiestNiches from "@/data/easiestNiches.json"

export default function ParallaxNiches() {
	const containerRef = useRef<HTMLDivElement>(null)
	const tilesRef = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return

			const scrolled = window.pageYOffset
			const rate = scrolled * -0.5

			// Parallax background
			containerRef.current.style.transform = `translateY(${rate}px)`

			// Individual tile parallax
			tilesRef.current.forEach((tile, index) => {
				if (tile) {
					const speed = 0.2 + index * 0.1
					const yPos = -(scrolled * speed)
					tile.style.transform = `translateY(${yPos}px)`
				}
			})
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
              <div
                ref={containerRef}
                className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 will-change-transform"
                style={{ zIndex: 1, pointerEvents: "none" }}
              />
              <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Easiest <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">YouTube Content Ideas</span> for 2025
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Find easy YouTube niches and low-competition ideas to boost your channel in 2025.
                </p>
                <div className="mt-8 text-sm text-gray-500">
                  Scroll to explore the best YouTube content opportunities
                </div>
              </div>
            </section>

            {/* Niches Grid */}
            <section className="relative py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {easiestNiches.map((niche, index) => (
                            <div
                                key={niche.title}
                                className="relative will-change-transform"
                            >
                                <Card className="bg-white/80 border-gray-200 backdrop-blur-sm hover:bg-gray-100/80 transition-all duration-500 overflow-hidden group shadow-md">
                                    <div className="p-8">
                                        {/* Competition Badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-4xl">{niche.icon}</div>
                                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                                Competition: {niche.competition}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 transition-colors">
                                            {niche.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                            {niche.description}
                                        </p>

                                        {/* Gradient Bar */}
                                        <div
                                            className={`h-1 w-full bg-gradient-to-r ${niche.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                                        />
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${niche.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-20 px-4 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                        Why These Niches?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-3xl font-bold text-green-500 mb-2">
                                Low Competition
                            </div>
                            <p className="text-gray-600">
                                Easier to rank and get discovered
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl font-bold text-blue-500 mb-2">
                                High Engagement
                            </div>
                            <p className="text-gray-600">
                                Audiences actively seeking content
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl font-bold text-purple-500 mb-2">
                                2025 Trends
                            </div>
                            <p className="text-gray-600">
                                Emerging opportunities this year
                            </p>
                        </div>
                    </div>
                </div>
            </section>

			{/* Footer */}
			<footer className="py-12 px-4 text-center text-gray-500">
				<p>
					Start creating in these niches today and dominate YouTube in 2025
				</p>
			</footer>
		</div>
	)
}
