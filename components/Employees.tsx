import TeamMembers from './TeamMembers'
import TeamSelect from './TeamSelect'

interface EmployeesProps {
    employees: any;
    selectedTeam: string;
    handleEmployeeCardClick: any;
    handleTeamSelectionChange: any
}
const Employees = (props: EmployeesProps) => {
    const { employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange } = props
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
