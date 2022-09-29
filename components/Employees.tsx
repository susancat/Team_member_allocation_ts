import TeamMembers from '../components/TeamMembers'
import TeamSelect from '../components/TeamSelect'

interface EmployeesProps {
    employees: any;
    selectedTeam: string;
    handleEmployeeCardClick: any;
    handleTeamSelectionChange: any
}
const Employees = (props: EmployeesProps) => {
    return(
        <>
            <TeamSelect 
                selectedTeam={props.selectedTeam} 
                handleTeamSelectionChange={props.handleTeamSelectionChange}
            />
            <TeamMembers employees={props.employees}/>
        </>
    )
}

export default Employees
