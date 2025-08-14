"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Satellite, Navigation, Shield, Globe } from "lucide-react";
import Heading from "../components/TextComponents/Heading";
import SubHeading from "../components/TextComponents/SubHeading";

function Products() {
    const products = [
        {
            id: "vnss",
            name: "VNSS",
            fullName: "VyomIC Navigation Satellite System",
            description: "Highly precise and secure navigation services worldwide",
            icon: Navigation,
            features: ["GPS", "GLONASS", "BEIDOU", "GALILEO", "NAVIC"],
            link: "/products/vnss",
            color: "from-blue-500 to-purple-600",
            bgColor: "from-blue-500/20 to-purple-600/20",
        },
        {
            id: "satellite-constellation",
            name: "Satellite Constellation",
            fullName: "Global PNT Satellite Constellation",
            description: "India's first & largest private satellite constellation",
            icon: Satellite,
            features: ["Global Coverage", "High Precision", "Real-time Data"],
            link: "/products/constellation",
            color: "from-orange-500 to-red-600",
            bgColor: "from-orange-500/20 to-red-600/20",
        },
        {
            id: "security-solutions",
            name: "Security Solutions",
            fullName: "Advanced Space Security",
            description: "Next-generation security for critical infrastructure",
            icon: Shield,
            features: ["Encrypted Communication", "Anti-jamming", "Secure Protocols"],
            link: "/products/security",
            color: "from-green-500 to-emerald-600",
            bgColor: "from-green-500/20 to-emerald-600/20",
        },
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
            {/* Animated Background Stars */}
            <div className="absolute inset-0 z-0">
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

            {/* Space gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-0"></div>

            {/* Hero Section */}
            <div id="hero-section" className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-20 text-white mt-[-16vh] md:mt-[-20vh]">
                <motion.div
                    className="w-full md:w-2/3 lg:w-[70%] mx-auto items-center flex flex-col gap-6 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <SubHeading
                        txt={"our products"}
                        textStyle={"text-xl"}
                        textColor={"blue"}
                        textCase={true}
                    />
                    <Heading
                        txt={"Revolutionary Space Technology Solutions"}
                        textStyle={"mb-6 md:mb-0"}
                    />
                    <p className="text-[16px] sm:text-[18px] text-zinc-400 max-w-2xl">
                        Discover our cutting-edge satellite navigation and security solutions
                        that are shaping the future of global positioning and communication.
                    </p>
                </motion.div>
            </div>

            {/* Products Section */}
            <div className="relative z-10 px-6 md:px-20 pb-16">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={slideUp}
                                className="group"
                            >
                                <Link to={product.link}>
                                    <div className={`relative h-96 bg-gradient-to-br ${product.bgColor} border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden`}>
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
                                            <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full"></div>
                                        </div>

                                        {/* Icon */}
                                        <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <product.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {product.name}
                                            </h3>
                                            <h4 className={`text-lg font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-4`}>
                                                {product.fullName}
                                            </h4>
                                            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                                {product.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2 mb-6">
                                                {product.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full`}></div>
                                                        <span className="text-zinc-400 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all duration-300">
                                                <span className="text-sm font-medium">Learn More</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Products;

