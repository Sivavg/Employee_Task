import { Settings, Bell } from 'lucide-react';

export default function Header() {
    return (
        <header className="h-[72px] bg-white border-b border-[#E8ECEF] flex items-center justify-end px-12 flex-shrink-0">
            <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#E2E8F0] transition-colors">
                    <Settings className="w-[20px] h-[20px]" />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#E2E8F0] transition-colors">
                    <Bell className="w-[20px] h-[20px]" />
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden ml-2 ring-2 ring-white shadow-sm border border-gray-100">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
