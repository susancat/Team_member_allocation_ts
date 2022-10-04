import TeamMembers from './TeamMembers'
import TeamSelect from './TeamSelect'
import { useState, useEffect } from 'react'
interface EmployeesProps {
    employees: any;
    selectedTeam: string | null;
    handleEmployeeCardClick: any;
    handleTeamSelectionChange: any
}
const Employees = (props: EmployeesProps) => {
    const { selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange } = props
    const [employees, setEmployees] = useState(props.employees)
    useEffect(() => {
        setEmployees(props.employees)
    },[props])
    return(
        <>
            <TeamSelect 
                selectedTeam={selectedTeam} 
                handleTeamSelectionChange={handleTeamSelectionChange}
            />
            <TeamMembers 
                employees={employees}
                selectedTeam={selectedTeam} 
                handleEmployeeCardClick={handleEmployeeCardClick}
            />
        </>
    )
}

export default Employees
