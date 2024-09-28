'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { X, ExternalLink } from 'lucide-react'

interface Project {
    id: number
    title: string
    description: string
    image: string
    details: string
    link?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Smart Meal Planner",
        description: "AI-powered recipe creator",
        image: "/static/images/project-1.gif",
        details: "An intelligent meal planning assistant that creates personalized recipes based on your dietary preferences and nutritional needs. Leveraging advanced AI algorithms, it offers a seamless and intuitive experience for health-conscious individuals.",
        link: "https://smartmeal.vercel.app"
    },
    {
        id: 2,
        title: "PDF Carousel Generator",
        description: "LinkedIn content creator",
        image: "/static/images/project-2.gif",
        details: "A sophisticated tool designed to generate visually stunning PDF carousels optimized for LinkedIn. Enhance your professional presence with engaging, shareable content that stands out in the feed.",
        link: "https://pdf-carousal.vercel.app"
    },
    {
        id: 3,
        title: "Project Harmony",
        description: "Collaborative workspace",
        image: "/static/images/project-1.jpg",
        details: "A next-generation collaborative workspace that seamlessly integrates project management, communication, and file sharing. Designed for modern teams, it enhances productivity and fosters creativity."
    },
    {
        id: 4,
        title: "EcoTrack",
        description: "Sustainability monitor",
        image: "/static/images/project-1.gif",
        details: "An innovative application that helps individuals and businesses track and reduce their carbon footprint. With intuitive visualizations and actionable insights, EcoTrack makes sustainability accessible to everyone."
    },
    {
        id: 5,
        title: "MindfulMinutes",
        description: "Meditation companion",
        image: "/static/images/project-1.gif",
        details: "A beautifully designed meditation app that offers guided sessions, ambient sounds, and progress tracking. MindfulMinutes helps users cultivate mindfulness and reduce stress in their daily lives."
    },
    {
        id: 6,
        title: "UrbanExplorer",
        description: "City discovery app",
        image: "/static/images/project-1.gif",
        details: "An immersive city exploration app that combines augmented reality, local recommendations, and historical insights. UrbanExplorer turns every walk into an adventure, revealing the hidden stories of urban landscapes."
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                <motion.h2
                    className="mb-2 text-center tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="rounded-full bg-gray-200 px-5 py-2 dark:bg-gray-800">Work</span>
                </motion.h2>
                <motion.p
                    className="px-3 py-2 text-gray-600 dark:text-gray-400 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Some of the noteworthy projects I have built
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-60 mb-6 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-2xl mb-2 transition-colors duration-300 font-semibold">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {project.description}
                            </p>
                            <motion.div
                                className="mt-4 flex items-center text-blue-600 dark:text-blue-400"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <span className="mr-2">View Project</span>
                                <ChevronRight size={16} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
                                <button
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{selectedProject.description}</p>
                            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className="text-sm text-gray-800 dark:text-gray-200 mb-4 max-h-32 overflow-y-auto">
                                {selectedProject.details}
                            </p>
                            {selectedProject.link ? (
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                                >
                                    <span>Visit Project</span>
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            ) : (
                                <button
                                    className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-300"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    Close
                                </button>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}