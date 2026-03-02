import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEmployee } from '../../context/EmployeeContext';
import { ChevronLeft, Edit2, Camera, ChevronDown } from 'lucide-react';

export default function EmployeeForm() {
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();
    const { getEmployee, addEmployee, updateEmployee } = useEmployee();
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        department: '',
        designation: '',
        project: '',
        type: '',
        status: '',
        avatar: ''
    });

    useEffect(() => {
        if (isEdit) {
            const emp = getEmployee(id);
            if (emp) {
                setFormData(emp);
            } else {
                navigate('/employee');
            }
        }
    }, [id, isEdit, getEmployee, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            updateEmployee(id, formData);
        } else {
            addEmployee(formData);
        }
        navigate('/employee');
    };

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="flex items-center gap-2 md:gap-4 mb-4">
                <button onClick={() => navigate('/employee')} className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-textMain">
                    <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
                </button>
                <h2 className="text-[22px] md:text-[26px] font-bold text-textMain tracking-tight">
                    {isEdit ? 'Edit Employee Details' : 'Add New Employee'}
                </h2>
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

                <form onSubmit={handleSubmit} className="max-w-[900px] flex flex-col gap-6">
                    <div className="mb-2">
                        <div
                            onClick={handleAvatarClick}
                            className="relative w-24 h-24 rounded-2xl bg-[#ecf2f7] border border-gray-200 flex flex-col items-center justify-center cursor-pointer overflow-hidden group hover:border-primary transition-colors"
                        >
                            {formData.avatar ? (
                                <>
                                    <img src={formData.avatar} alt="Profile" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Edit2 className="w-6 h-6 text-white" />
                                    </div>
                                </>
                            ) : (
                                <Camera className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                            )}
                            {formData.avatar && (
                                <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full shadow-sm z-10 pointer-events-none">
                                    <Edit2 className="w-3 h-3" />
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[14px] font-bold text-[#1E293B]">Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-[10px] text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-[#1E293B]"
                                placeholder="Name"
                            />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[14px] font-bold text-[#1E293B]">Employee ID*</label>
                            <input
                                type="text"
                                name="employeeId"
                                value={formData.employeeId}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-[10px] text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-[#1E293B]"
                                placeholder="Employee ID"
                            />
                        </div>

                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[14px] font-bold text-[#1E293B]">Department*</label>
                            <div className="relative">
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-[10px] text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none bg-white text-[#1E293B] pr-10"
                                >
                                    <option value="" disabled>Select Department</option>
                                    <option value="Design">Design</option>
                                    <option value="Development">Development</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="HR">HR</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#64748B] pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[14px] font-bold text-[#1E293B]">Designation*</label>
                            <div className="relative">
                                <select
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-[10px] text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none bg-white text-[#1E293B] pr-10"
                                >
                                    <option value="" disabled>Select Designation</option>
                                    <option value="Design Lead">Design Lead</option>
                                    <option value="Senior Designer">Senior Designer</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="Manager">Manager</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#64748B] pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[14px] font-bold text-[#1E293B]">Project</label>
                            <div className="relative">
                                <select
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    className="w-full px-4 py-[10px] text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none bg-white text-[#1E293B] pr-10"
                                >
                                    <option value="" disabled>Select Project</option>
                                    <option value="Car Rental">Car Rental</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="CRM System">CRM System</option>
                                    <option value="Internal Tool">Internal Tool</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#64748B] pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[14px] font-bold text-[#1E293B]">Type*</label>
                            <div className="relative">
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-[10px] text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none bg-white text-[#1E293B] pr-10"
                                >
                                    <option value="" disabled>Select Type</option>
                                    <option value="Office">Office</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#64748B] pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[14px] font-bold text-[#1E293B]">Status*</label>
                            <div className="relative">
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-[10px] text-sm rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none bg-white text-[#1E293B] pr-10"
                                >
                                    <option value="" disabled>Select Status</option>
                                    <option value="Permanent">Permanent</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Freelance">Freelance</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#64748B] pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-10">
                        <button
                            type="button"
                            onClick={() => navigate('/employee')}
                            className="px-6 py-[10px] rounded-lg border border-[#E2E8F0] font-bold text-[#1E293B] hover:bg-gray-50 transition-colors text-sm w-[110px]"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-[10px] rounded-lg bg-[#0A84FF] hover:bg-blue-600 font-bold text-white transition-colors text-sm w-[110px]"
                        >
                            {isEdit ? 'Update' : 'Confirm'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
