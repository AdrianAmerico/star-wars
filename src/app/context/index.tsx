import React, { createContext } from 'react'

interface IGlobalProps {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

const GlobalContext = createContext({} as IGlobalProps)

const GlobalContextProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<any[]>([])

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
