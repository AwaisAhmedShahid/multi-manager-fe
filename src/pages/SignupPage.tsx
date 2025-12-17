import { Link } from 'react-router-dom';
import { SignupForm } from '@/components/forms/SignupForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SignupPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 p-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <Card className="w-full max-w-md relative z-10 backdrop-blur-sm bg-white/95 shadow-2xl animate-fade-in">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        Create Account
                    </CardTitle>
                    <CardDescription className="text-base">
                        Fill in your details to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SignupForm />
                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">Already have an account? </span>
                        <Link
                            to="/login"
                            className="font-medium text-cyan-600 hover:text-cyan-500 transition-colors"
                        >
                            Log in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
