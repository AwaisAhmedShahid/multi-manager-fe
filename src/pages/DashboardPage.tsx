import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { LogOut, Shield, Users, Crown, User } from 'lucide-react';

const roleIcons = {
    user: User,
    manager: Users,
    admin: Shield,
    super_admin: Crown,
};

const roleColors = {
    user: 'from-green-500 to-emerald-500',
    manager: 'from-blue-500 to-cyan-500',
    admin: 'from-purple-500 to-pink-500',
    super_admin: 'from-orange-500 to-red-500',
};

const roleDescriptions = {
    user: 'Standard user with basic access privileges',
    manager: 'Team manager with elevated permissions',
    admin: 'Administrator with advanced system access',
    super_admin: 'Super Administrator with full system control',
};

export const DashboardPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    const RoleIcon = roleIcons[user.role];
    const roleColor = roleColors[user.role];

    return (
        <div className={`min-h-screen bg-gradient-to-br ${roleColor} p-4`}>
            <div className="max-w-4xl mx-auto pt-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 animate-fade-in">
                    <div>
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Dashboard</h1>
                        <p className="text-white/80 mt-1">Welcome back, {user.name}!</p>
                    </div>
                    <Button
                        onClick={handleLogout}
                        variant="secondary"
                        className="shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>

                {/* User Info Card */}
                <Card className="backdrop-blur-sm bg-white/95 shadow-2xl animate-fade-in mb-6">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className={`p-4 rounded-full bg-gradient-to-br ${roleColor}`}>
                                <RoleIcon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">{user.name}</CardTitle>
                                <CardDescription className="text-base">{user.email}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Role</p>
                                <p className="text-lg font-semibold capitalize">
                                    {user.role.replace('_', ' ')}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Description</p>
                                <p className="text-base">{roleDescriptions[user.role]}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">User ID</p>
                                <p className="text-base font-mono">{user.id}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                    <Card className="backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-lg">Access Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold capitalize">
                                {user.role.replace('_', ' ')}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-lg">Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                                <p className="text-3xl font-bold">Active</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="backdrop-blur-sm bg-white/90 hover:bg-white/95 transition-all hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-lg">Session</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">Secure</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
