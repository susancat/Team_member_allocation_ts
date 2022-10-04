import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import employeeList from '../data/employee.json'
import Header from '../components/Header'
import Employees from '../components/Employees'
import Teams from './teams'
const Home = () => {
  const [selectedTeam, setTeam] = useState('B' || localStorage.getItem('selectedTeam'))
  const [employees, setEmployees] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('employeeList')) : employeeList)
//must give it a default value, otherwise when localStorage is not ready yet, the SSR will conflict with CSR
useEffect(() => {
  localStorage.setItem('employeeList', JSON.stringify(employees))
  console.log(employees[4])
},[employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  },[selectedTeam])

  const handleTeamSelectionChange = (event: any) => {
    setTeam(event.target.value);
  }
//target=DOM element trigger an event; currentTarget=DOM element that event listener is listening on
  const handleEmployeeCardClick = (event: any) => {
    const transformEmployees = employees.map((employee: any)=> {
      if(employee.id === parseInt(event.currentTarget.id)) {
      //must use parseInt to convert the id: find the target by id, update
        if(employee.team === selectedTeam) {
              employee = {...employee, team: ''}
        } else {
            employee = {...employee, team: selectedTeam}
        } 
      } 
      return employee  
    })
    setEmployees(transformEmployees)
  }
  return (
    <Container>
      <Head>
        <title>Team member allocation app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
        selectedTeam={selectedTeam} 
        teamMemberCount={employees.filter((employee: any) => employee.team === selectedTeam).length} 
      />
      <Employees 
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <Teams 
        employees={employees}
        selectedTeam={selectedTeam}
        setTeam={setTeam}
      />
    </Container>
  )
}

export default Home
