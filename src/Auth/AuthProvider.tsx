import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export function AuthProvider({children} : any){
  const navigate = useNavigate()
  useEffect(() => {
    const ExistToken = localStorage.getItem('@UbiRH/TOKEN')
    const ExistUser = localStorage.getItem('@UbiRH/USER')
    if(!ExistToken && !ExistUser){
      navigate('/')
    }
  },[])
  return <>{children}</>
}
