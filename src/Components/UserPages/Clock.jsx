import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock(){
    const[clockState, setClockState] = useState();
    const[dateState, setDateState] = useState();
    const[dayState, setDayState] = useState();
    const[mouthState, setMouthState] = useState();
    const[yearState, setYearState] = useState();
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    useEffect(()=>{
        setInterval(()=>{
            const time = new Date();
            setClockState(time.toLocaleTimeString());
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
            <h3>
                {semana[dateState]},{dayState} {meses[mouthState]}, {yearState}
            </h3>
            <h2>{clockState}</h2>
        </ClockStyle>
    )
}

export default Clock;


export const ClockStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        font-weight: 500;
        margin-bottom: 0.3rem;
    }

    h2{
        font-weight: 500;
    }
`
