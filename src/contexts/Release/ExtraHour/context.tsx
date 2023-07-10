import { ReactNode, createContext, useState } from 'react'

import { ContextExtraHourProps } from './types'

const Context = createContext({} as ContextExtraHourProps)

const Provider = ({ children }: { children: ReactNode }) => {
  const [data, setDate] = useState()

  const contextProps = {
    handleSendHours
  }

  async function handleSendHours() {
    try {
    } catch (error) {}
  }
}
