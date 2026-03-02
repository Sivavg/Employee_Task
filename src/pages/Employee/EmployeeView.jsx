import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEmployee } from '../../context/EmployeeContext';
import { ChevronLeft } from 'lucide-react';

export default function EmployeeView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getEmployee } = useEmployee();

    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const emp = getEmployee(id);
        if (emp) {
            setEmployee(emp);
        } else {
            navigate('/employee');
        }
    }, [id, getEmployee, navigate]);

    if (!employee) return null;

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="flex items-center gap-4 mb-4">
                <button onClick={() => navigate('/employee')} className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-textMain">
                    <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
                </button>
                <h2 className="text-[26px] font-bold text-textMain tracking-tight">View Employee Details</h2>
            </div>

            <div className="flex-1 mt-6">
                <div className="border-b border-gray-200 mb-8 max-w-[900px]">
                    <button className="flex items-center gap-2 pb-3 border-b-[3px] border-primary text-primary font-bold text-sm -mb-[2px]">
                        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        Personal Information
                    </button>
                </div>
                <div className="max-w-[900px] flex flex-col gap-8">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#ecf2f7] mb-2 border border-gray-200">
                        {employee.avatar ? (
                            <img src={employee.avatar} alt={employee.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary text-3xl font-bold text-white">
                                {employee.name.charAt(0)}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                            <span className="text-[13px] font-bold text-gray-500 mb-1">Name</span>
                            <span className="text-[#1E293B] font-medium">{employee.name}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                            <span className="text-[13px] font-bold text-gray-500 mb-1">Employee ID</span>
                            <span className="text-[#1E293B] font-medium">{employee.employeeId}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                            <span className="text-[13px] font-bold text-gray-500 mb-1">Department</span>
                            <span className="text-[#1E293B] font-medium">{employee.department}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                            <span className="text-[13px] font-bold text-gray-500 mb-1">Designation</span>
                            <span className="text-[#1E293B] font-medium">{employee.designation}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                            <span className="text-[13px] font-bold text-gray-500 mb-1">Project</span>
                            <span className="text-[#1E293B] font-medium">{employee.project || '-'}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                            <span className="text-[13px] font-bold text-gray-500 mb-1">Type</span>
                            <span className="text-[#1E293B] font-medium">{employee.type}</span>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-3">
                            <span className="text-[13px] font-bold text-gray-500 mb-1">Status</span>
                            <span className="text-[#1E293B] font-medium">{employee.status}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
