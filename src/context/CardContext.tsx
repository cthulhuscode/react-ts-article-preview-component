import { useState, createContext, Dispatch, SetStateAction } from "react";

export interface ICardContext{
  showDialog: boolean
  setShowDialog: Dispatch<SetStateAction<boolean>>
}

export const CardContext = createContext<ICardContext | null>({
  showDialog: false, 
  setShowDialog: () => {} 
});

export const CardProvider= ({children}: any) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <CardContext.Provider
      value={{
        showDialog,
        setShowDialog
      }}
    >
      {children}
    </CardContext.Provider>
  )
}