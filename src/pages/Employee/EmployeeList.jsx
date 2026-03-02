import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployee } from '../../context/EmployeeContext';
import { Search, Plus, Eye, Edit2, Trash2 } from 'lucide-react';

export default function EmployeeList() {
    const { employees, deleteEmployee } = useEmployee();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState(null);

    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.employeeId.includes(search)
    );

    const confirmDelete = () => {
        if (employeeToDelete) {
            deleteEmployee(employeeToDelete.id);
            setIsDeleteModalOpen(false);
            setEmployeeToDelete(null);
        }
    };

    const openDeleteModal = (emp) => {
        setEmployeeToDelete(emp);
        setIsDeleteModalOpen(true);
    };

    return (
        <div className="flex flex-col h-full bg-transparent relative">
            <div className="flex items-center justify-between mb-8 flex-shrink-0">
                <h2 className="text-[28px] font-bold text-[#1E293B] tracking-tight">Employee</h2>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-11 pr-4 py-[10px] border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-primary bg-white w-72 text-sm text-[#000]"
                        />
                    </div>
                    <button
                        onClick={() => navigate('/employee/add')}
                        className="bg-[#0A84FF] hover:bg-blue-600 text-white px-5 py-[10px] rounded-lg flex items-center gap-2 font-medium transition-colors text-sm"
                    >
                        <Plus className="w-[18px] h-[18px]" strokeWidth={2.5} />
                        Add New Employee
                    </button>
                </div>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden flex-1 m-0">
                <div className="overflow-x-auto h-full">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead className="bg-[#F8FAFC]">
                            <tr className="border-b-2 border-[#E2E8F0] text-[#64748B] text-base font-semibold">
                                <th className="px-6 py-4 text-left">Employee Name</th>
                                <th className="px-6 py-4 text-left">Employee ID</th>
                                <th className="px-6 py-4 text-left">Department</th>
                                <th className="px-6 py-4 text-left">Designation</th>
                                <th className="px-6 py-4 text-left">Project</th>
                                <th className="px-6 py-4 text-left">Type</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-base text-[#334155]">
                            {filteredEmployees.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="text-center py-8 text-gray-500 text-base">No employees found</td>
                                </tr>
                            ) : (
                                filteredEmployees.map((emp) => (
                                    <tr key={emp.id} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                                                {emp.avatar ? (
                                                    <img src={emp.avatar} alt={emp.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold text-xs">{emp.name.charAt(0)}</div>
                                                )}
                                            </div>
                                            <span className="font-semibold text-[#1E293B] text-[16px]">{emp.name}</span>
                                        </td>
                                        <td className="px-6 py-4 text-[#1E293B] font-medium">{emp.employeeId}</td>
                                        <td className="px-6 py-4 text-[#1E293B]">{emp.department}</td>
                                        <td className="px-6 py-4 text-[#1E293B]">{emp.designation}</td>
                                        <td className="px-6 py-4 text-[#1E293B]">{emp.project || '-'}</td>
                                        <td className="px-6 py-4 text-[#1E293B]">{emp.type}</td>
                                        <td className="px-6 py-4 text-[#1E293B]">{emp.status}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-3 text-[#64748B]">
                                                <button onClick={() => navigate(`/employee/view/${emp.id}`)} className="hover:text-primary transition-colors cursor-pointer" title="View">
                                                    <Eye className="w-5 h-5" strokeWidth={1.5} />
                                                </button>
                                                <button onClick={() => navigate(`/employee/edit/${emp.id}`)} className="hover:text-primary transition-colors cursor-pointer" title="Edit">
                                                    <Edit2 className="w-4 h-4" strokeWidth={2} />
                                                </button>
                                                <button onClick={() => openDeleteModal(emp)} className="hover:text-red-500 transition-colors cursor-pointer" title="Delete">
                                                    <Trash2 className="w-5 h-5" strokeWidth={1.5} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-2xl transition-all">
                    <div className="bg-[#F8FAFC] rounded-2xl w-[320px] flex flex-col overflow-hidden shadow-xl animate-in fade-in zoom-in duration-200">
                        <div className="py-10 px-6 flex flex-col items-center justify-center text-center w-full">
                            <div className="mb-4 text-[#0A84FF]">
                                <Trash2 className="w-[50px] h-[50px]" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-[18px] font-semibold text-[#1E293B] leading-snug">Are you sure you want<br />to Delete</h3>
                        </div>
                        <div className="flex w-full border-t border-[#E2E8F0]">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="flex-1 py-3 bg-[#FF4B4B] text-white font-medium hover:bg-red-600 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="flex-1 py-3 bg-[#0A84FF] text-white font-medium hover:bg-blue-600 transition-colors"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
