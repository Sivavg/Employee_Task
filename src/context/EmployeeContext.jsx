import { createContext, useContext, useState, useEffect } from 'react';

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
    const [employees, setEmployees] = useState(() => {
        const saved = localStorage.getItem('employees');
        if (saved) {
            return JSON.parse(saved);
        }
        return [
            {
                id: '1',
                name: 'Arlene',
                employeeId: '671190345',
                department: 'Design',
                designation: 'Design Lead',
                project: 'Car Rental',
                type: 'Office',
                status: 'Permanent',
                avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (employee) => {
        setEmployees([...employees, { ...employee, id: Date.now().toString() }]);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(emp => emp.id === id ? { ...updatedEmployee, id } : emp));
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    const getEmployee = (id) => {
        return employees.find(emp => emp.id === id);
    };

    return (
        <EmployeeContext.Provider value={{
            employees,
            addEmployee,
            updateEmployee,
            deleteEmployee,
            getEmployee
        }}>
            {children}
        </EmployeeContext.Provider>
    );
}

export function useEmployee() {
    return useContext(EmployeeContext);
}
