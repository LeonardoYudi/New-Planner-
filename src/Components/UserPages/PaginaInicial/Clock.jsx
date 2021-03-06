import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock(){
    const[hoursState, setHoursState] = useState();
    const[minState, setMinState] = useState();
    const[dateState, setDateState] = useState();
    const[dayState, setDayState] = useState();
    const[mouthState, setMouthState] = useState();
    const[yearState, setYearState] = useState();
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    useEffect(()=>{
        setInterval(()=>{
            const hora = new Date();
            setHoursState(hora.getHours());
            const min = new Date();
            setMinState(min.getMinutes());
            const date = new Date();
            setDateState(date.getDay());
            const day = new Date()
            setDayState(day.getDate())
            const mounth = new Date();
            setMouthState(mounth.getMonth())
            const year = new Date()
            setYearState(year.getFullYear())
        },1000);
    },[])


    return(
        <ClockStyle>
            <h2>
                {hoursState}:{minState}
            </h2>
            <h3>
                {semana[dateState]},{dayState} {meses[mouthState]}, {yearState}
            </h3>      
        </ClockStyle>
    )
}

export default Clock;


export const ClockStyle = styled.div`
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-weight: 800;
        font-size: 2.3rem;
    }
    h3{
        font-weight: 500;
        margin-bottom: 0.3rem;
        border-bottom: 1px solid gray;
    }

    h2{
        font-weight: 500;
    }
`
