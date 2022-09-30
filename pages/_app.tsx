import '../styles/globals.css'
import { SSRProvider } from 'react-bootstrap'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import employeeList from '../data/employee.json'

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedTeam, setTeam] = useState('B' || localStorage.getItem('selectedTeam'))
  const [employees, setEmployees] = useState( employeeList || localStorage.getItem('employeeList'))
//must give it a default value, otherwise when localStorage is not ready yet, the SSR will conflict with CSR
useEffect(() => {
  localStorage.setItem('employeeList', JSON.stringify(employeeList))
},[employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', selectedTeam)
  },[selectedTeam])

  const handleTeamSelectionChange = (event: any) => {
    setTeam(event.target.value);
  }
//target=DOM element trigger an event; currentTarget=DOM element that event listener is listening on
  const handleEmployeeCardClick = (event: any) => {
    const transformEmployees = employees.map(employee => {
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
  return(
    <SSRProvider>
      <Layout>
        <Component 
          {...pageProps} 
          employees={employees}
          selectedTeam={selectedTeam}
          setTeam={setTeam}
          handleEmployeeCardClick={handleEmployeeCardClick}
          handleTeamSelectionChange={handleTeamSelectionChange}
        />
      </Layout>
    </SSRProvider>
  ) 
}

export default MyApp