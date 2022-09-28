import '../styles/globals.css'
import { SSRProvider } from 'react-bootstrap'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import employees from '../data/employee.json'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initTeams()
  },[])
  let teamA: object[] = [];
  let teamB: object[] = [];
  let teamC: object[]= [];
  let teamD: object[] = [];
  const initTeams = () => {
    teamA = employees.filter(employee => employee.updatedTeam === 'A' || employee.team === 'A')
    teamB = employees.filter(employee => employee.updatedTeam === 'B' ||employee.team === 'B')
    teamC = employees.filter(employee => employee.updatedTeam === 'C' ||employee.team === 'C')
    teamD = employees.filter(employee => employee.updatedTeam === 'D' ||employee.team === 'D')
    localStorage.setItem('teamA', JSON.stringify(teamA))
    localStorage.setItem('teamB', JSON.stringify(teamB))
    localStorage.setItem('teamC', JSON.stringify(teamC))
    localStorage.setItem('teamD', JSON.stringify(teamD))
}
  return(
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  ) 
}

export default MyApp
