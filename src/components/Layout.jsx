import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-white font-sans text-textMain">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden bg-white">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
