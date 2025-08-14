"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    ArrowRight
} from "lucide-react";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";

function VNSS() {
    const [showMoreNav, setShowMoreNav] = useState(false);
    const [showMoreTiming, setShowMoreTiming] = useState(false);

    const features = [
        {
            title: "Ultra-High Precision",
            description: "Centimeter-level accuracy for mission-critical operations on land, sea, air, and space."
        },
        {
            title: "Resilient & Secure",
            description: "Robust encryption, anti-jamming, and spoofing protection for assured PNT."
        },
        {
            title: "Truly Global Coverage",
            description: "Uninterrupted service across every latitude and longitude — even in remote and hostile environments."
        },
        {
            title: "Interoperable & Future-Proof",
            description: "Designed to integrate seamlessly with existing technologies and evolving navigation standards."
        }
    ];





    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const slideUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen relative overflow-hidden font-sans">
            {/* Space Background Image - Fixed positioned to cover entire viewport */}
            <div className="fixed inset-0 z-[-1]">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1634176866089-b633f4aec882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
                        backgroundPosition: 'center 20%'
                    }}
                ></div>
            </div>

            {/* Animated Background Stars */}
            <div className="fixed inset-0 z-[-1]">
                {Array.from({ length: 100 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-60"
                        style={{
                            width: Math.random() * 2 + 1,
                            height: Math.random() * 2 + 1,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Lighter Space gradient overlay for better image visibility */}
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60 z-[-1]"></div>

            {/* Hero Section */}
            <div id="hero-section" className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-20 text-white mt-[-10vh]">
                <div className="w-full max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-7">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            VNSS
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-200 mb-8">
                        VyomIC Navigation Satellite System
                    </h2>

                    <p className="text-[1.6rem] md:text-[1.6rem] text-zinc-300 leading-relaxed max-w-4xl mx-auto">
                        VNSS is the PNT service of VyomIC, built on our upcoming LEO-PNT global constellation. It delivers high-precision, secure, and resilient navigation - ensuring reliable positioning and authenticated timing anywhere in the world.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative z-10 px-6 md:px-20 py-20">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={slideUp} className="text-center mb-16">
                        <SubHeading
                            txt={"key features"}
                            textStyle={"text-3xl md:text-4xl lg:text-5xl"}
                            textColor={"blue"}
                            textCase={true}
                        />
                        <div className="h-4 md:h-5 lg:h-6"></div>
                        <Heading
                            txt={"Advanced Navigation Technology"}
                            textStyle={"mb-6 text-2xl md:text-3xl lg:text-4xl"}
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={slideUp}
                                className="group"
                            >
                                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500 h-80 flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 overflow-hidden">
                                        <img
                                            src="/sat_img.png"
                                            alt="Satellite"
                                            className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed flex-1 text-lg">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Applications Section */}
            <div className="relative z-10 px-6 md:px-20 py-20">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="text-center">
                        <motion.div variants={slideUp} className="max-w-4xl mx-auto">
                            <SubHeading
                                txt={"applications"}
                                textStyle={"text-3xl md:text-4xl lg:text-5xl"}
                                textColor={"blue"}
                                textCase={true}
                            />
                            <div className="h-4 md:h-5 lg:h-6"></div>
                            <Heading
                                txt={"Powering the Future of Navigation"}
                                textStyle={"mb-8 text-2xl md:text-3xl lg:text-4xl"}
                            />
                            <p className="text-zinc-300 text-xl leading-relaxed mb-8">
                                VNSS transforms industries by delivering secure, precise, and resilient Positioning, Navigation and Timing (PNT) solutions anywhere on Earth. Below are core navigation domains and critical timing-dependent applications - both equally essential.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {/* Detailed Applications Section */}
            <div className="relative z-10 px-6 md:px-20 py-20">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Navigation Applications */}
                        <motion.div variants={slideUp}>
                            <div className="mb-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">Navigation Applications</h3>
                                <p className="text-zinc-400 text-[22px]">Core navigation domains powered by VNSS technology</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Autonomous Systems",
                                        description: "Precise navigation for self-driving vehicles, delivery drones, and robotic platforms."
                                    },
                                    {
                                        title: "Maritime Navigation",
                                        description: "Reliable positioning for shipping, offshore operations, and coastal safety."
                                    },
                                    {
                                        title: "Defense & Military",
                                        description: "Assured PNT for mission-critical operations, resilient to jamming and spoofing."
                                    },
                                    {
                                        title: "Surveying & Mapping",
                                        description: "Accurate geospatial data for infrastructure, land management, and exploration."
                                    }
                                ].map((app, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div>
                                            <h4 className="text-white font-semibold mb-2 text-lg">{app.title}</h4>
                                            <p className="text-zinc-400 text-lg leading-relaxed">{app.description}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Hidden Applications */}
                                <div className={`space-y-4 transition-all duration-500 ${showMoreNav ? 'block' : 'hidden'}`}>
                                    {[
                                        {
                                            title: "Precision Agriculture",
                                            description: "Optimize yields with centimeter-level field positioning and guidance."
                                        },
                                        {
                                            title: "Aviation & Space",
                                            description: "Secure navigation for commercial, private, and unmanned aerial missions."
                                        },
                                        {
                                            title: "Emergency & Disaster Response",
                                            description: "Rapid deployment and accurate location tracking for rescue and relief."
                                        },
                                        {
                                            title: "IoT & Smart Infrastructure",
                                            description: "Synchronizing and positioning connected devices across global networks."
                                        }
                                    ].map((app, index) => (
                                        <motion.div
                                            key={index + 4}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div>
                                                <h4 className="text-white font-semibold mb-2 text-lg">{app.title}</h4>
                                                <p className="text-zinc-400 text-lg leading-relaxed">{app.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setShowMoreNav(!showMoreNav)}
                                    className="mt-6 w-full py-3 px-6 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    {showMoreNav ? "Show Less" : "Know More"}
                                    <span className={`transition-transform duration-300 ${showMoreNav ? 'rotate-180' : ''}`}>▼</span>
                                </button>
                            </div>
                        </motion.div>

                        {/* Critical Timing Use Cases */}
                        <motion.div variants={slideUp}>
                            <div className="mb-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">Critical Timing Use Cases</h3>
                                <p className="text-zinc-400 text-[22px]">Precise synchronization powered by VNSS technology</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Telecom & 5G Networks",
                                        description: "Network synchronization for TDD, handovers, and phase/frequency alignment."
                                    },
                                    {
                                        title: "Power Grid & Smart Grids",
                                        description: "Time-synchronized measurements using PMUs play a crucial role in fault detection, event analysis, and maintaining overall grid stability."
                                    },
                                    {
                                        title: "Financial Systems & Trading",
                                        description: "Secure timestamping, audit trails, and low-latency ordering for regulated markets."
                                    },
                                    {
                                        title: "Data Centers & Cloud",
                                        description: "Clock sync for distributed databases, consensus algorithms, and logging."
                                    }
                                ].map((app, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div>
                                            <h4 className="text-white font-semibold mb-2 text-lg">{app.title}</h4>
                                            <p className="text-zinc-400 text-lg leading-relaxed">{app.description}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Hidden Applications */}
                                <div className={`space-y-4 transition-all duration-500 ${showMoreTiming ? 'block' : 'hidden'}`}>
                                    {[
                                        {
                                            title: "Broadcast & Media",
                                            description: "Synchronized content distribution and live broadcast timing coordination."
                                        },
                                        {
                                            title: "Rail & Transportation Signaling",
                                            description: "Precise schedule adherence and signaling systems for safe operation."
                                        },
                                        {
                                            title: "Scientific Research & Observatories",
                                            description: "Time-tagging for experiments, VLBI, and coordinated measurements."
                                        },
                                        {
                                            title: "IoT & Industrial Automation",
                                            description: "Coordinated sensor fusion, event ordering, and deterministic control."
                                        }
                                    ].map((app, index) => (
                                        <motion.div
                                            key={index + 4}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div>
                                                <h4 className="text-white font-semibold mb-2 text-lg">{app.title}</h4>
                                                <p className="text-zinc-400 text-lg leading-relaxed">{app.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setShowMoreTiming(!showMoreTiming)}
                                    className="mt-6 w-full py-3 px-6 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    {showMoreTiming ? "Show Less" : "Know More"}
                                    <span className={`transition-transform duration-300 ${showMoreTiming ? 'rotate-180' : ''}`}>▼</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="relative z-10 px-6 md:px-20 py-20">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Experience the Future of Navigation?
                        </h2>
                        <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
                            Join the revolution in satellite navigation technology.
                            Contact our team to learn how VNSS can transform your operations.
                        </p>
                        <Link to="/contact-us">
                            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                                Get Started Today
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default VNSS;
