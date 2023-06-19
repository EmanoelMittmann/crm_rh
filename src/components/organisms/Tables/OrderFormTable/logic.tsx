import api from "api"
import { useEffect } from "react"
import { routes } from "routes"

export const OrderForm = () => {

 const getProfessional = async () => {
    const {data} =  await api.get(routes.professional.list)
    console.log('data: ', data)
 }

 useEffect(()=>{
    getProfessional()
 },[])


    return (
        <>
        <div>
            <h1>OrderForm</h1>
        </div>
        </>
    )
}