import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                {/* Navigation */}
                <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">AuthApp</div>
                    <div className="flex gap-4">
                        <Link to="/login">
                            <Button variant="ghost" className="text-white hover:bg-white/10">
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="bg-white text-purple-900 hover:bg-white/90">
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                        Secure Authentication
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Made Simple
                        </span>
                    </h1>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in">
                        A modern authentication system with role-based access control.
                        Built with React, TypeScript, and the latest web technologies.
                    </p>
                    <div className="flex gap-4 justify-center animate-fade-in">
                        <Link to="/signup">
                            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-2xl">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/15 transition-all animate-fade-in">
                            <div className="inline-flex p-4 bg-purple-500/20 rounded-full mb-4">
                                <Shield className="h-8 w-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Secure by Default</h3>
                            <p className="text-white/70">
                                Industry-standard security practices with JWT authentication
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-4">
                                <Users className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Role-Based Access</h3>
                            <p className="text-white/70">
                                Four distinct user roles: User, Manager, Admin, and Super Admin
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="inline-flex p-4 bg-pink-500/20 rounded-full mb-4">
                                <Zap className="h-8 w-8 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                            <p className="text-white/70">
                                Built with Vite and optimized for maximum performance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
