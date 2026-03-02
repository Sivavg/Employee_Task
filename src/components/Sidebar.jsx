import { NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Users, Calendar, MessageSquare } from 'lucide-react';

const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
    { path: '/employee', label: 'Employee', icon: Users },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/messages', label: 'Messages', icon: MessageSquare },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <aside className="w-64 bg-white border-r border-[#E8ECEF] flex flex-col h-full flex-shrink-0">
            <div className="h-[72px] flex items-center px-8 border-b border-[#E8ECEF]">
                <h1 className="text-[#0A84FF] text-2xl font-bold tracking-tight">RS-TECH</h1>
            </div>

            <nav className="flex-1 py-6 flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-4 pl-8 py-3 w-[220px] rounded-r-full text-[15px] font-medium transition-colors ${isActive
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-[#64748B] hover:bg-gray-50 hover:text-[#1E293B]'
                                }`}
                        >
                            <item.icon className={`w-[22px] h-[22px] ${isActive ? 'text-white' : 'text-[#64748B]'}`} />
                            {item.label}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}
