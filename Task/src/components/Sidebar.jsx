import { NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Users, Calendar, MessageSquare, X } from 'lucide-react';

const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
    { path: '/employee', label: 'Employee', icon: Users },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/messages', label: 'Messages', icon: MessageSquare },
];

export default function Sidebar({ isOpen, setIsOpen }) {
    const location = useLocation();

    return (
        <aside className={`fixed md:relative z-30 w-64 bg-white border-r border-[#E8ECEF] flex flex-col h-full flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <div className="h-[72px] flex items-center justify-between px-8 border-b border-[#E8ECEF]">
                <h1 className="text-[#0A84FF] text-2xl font-bold tracking-tight">RS-TECH</h1>
                <button
                    className="md:hidden text-[#64748B] hover:text-[#1E293B]"
                    onClick={() => setIsOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <nav className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen && setIsOpen(false)}
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
