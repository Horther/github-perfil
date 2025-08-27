import { useState, useEffect } from "react";

const Formulario = ()=> {
    const [materiA, setMateriA] = useState(0);
    const [materiB, setMateriB] = useState(0);
    const [materiC, setMateriC] = useState(0);
    const [nome, setNome] = useState('');
    //altera sempre que o estado mudar
    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome])
    //altera quando inicia o componente
    useEffect(() => {
        console.log('O componente iniciou')
    }, [])
    //altera quando finiliza o componente
    useEffect(() => {
        return () => {
            console.log('O componente finalizou')
        }
    }, [])

    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // setNome(evento.target.value)

        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            //estadoAnterior = valorNovo;

            return evento.target.value;
        })
            
        
    }

    const renderizaResultado = () => {
        const soma = materiA + materiB + materiC;
        const media = soma / 3;
        if(media >=7){
            return (<p>Olá {nome} você foi aprovado</p>)
        } else if(media >=5) {
            return (<p>Olá {nome} você esta de recuperação</p>)
        } else {
            return (<p>Olá {nome} você foi reprovado</p>)
        }
    
    
    }

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item=> (
                    <li key={item}>{item}</li>
                    )
                )
                }
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriA(parseInt(target.value))} /> 
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;