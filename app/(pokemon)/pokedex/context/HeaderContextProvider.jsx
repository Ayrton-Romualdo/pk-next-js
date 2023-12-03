'use client'
const { createContext, useContext, useState } = require("react");

const HeaderStateContext = createContext({

    titulo: '',
    setTitulo: () => {},
    posicao: '', 
    setPosicao: () => {},
    btnVoltar: false, 
    setBtnVoltar: () => {}
})


export const HeaderContextProvider = ({children}) => {
    const [titulo, setTitulo] = useState('');
    const [posicao, setPosicao] = useState('');
    const [btnVoltar, setBtnVoltar] = useState(false);

    return (
        <HeaderStateContext.Provider value={{ 
            titulo, setTitulo, posicao, setPosicao, btnVoltar, setBtnVoltar
         }}>
            {children}
        </HeaderStateContext.Provider>
    )
}

export const headerStateContext = () => useContext(HeaderStateContext);