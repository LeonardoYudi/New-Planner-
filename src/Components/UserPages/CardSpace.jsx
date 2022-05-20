import { FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";

function CardSpace(){
    return(
        <CardArea>
            <h2>Lembretes</h2>
            <CardList>
                <Card>
                    <HeaderCard>
                        <h2>Title</h2>
                        <OptionsCard>
                            <button><FaTimesCircle size={20}/></button>
                        </OptionsCard>
                    </HeaderCard>
                    <div>

                    </div>
                    <AddTarefaArea>
                        <input type="text" placeholder="Nova tarefa" required/>
                        <ButtonAddTarefa>Adicionar Tarefa</ButtonAddTarefa>
                    </AddTarefaArea>
                </Card>
            </CardList>
        </CardArea>
    )
}

export default CardSpace;

export const CardArea = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
  padding: 0.5rem;
`

export const CardList = styled.ul`
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
`

export const Card = styled.li`
  width: 230px;
  min-height: 200px;
  background-color: #fbfb4ac5;
  border-radius: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  box-shadow: 0px 6px 10px -2px #8B8B8B;
  
`

export const HeaderCard = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`

export const OptionsCard = styled.div`
  button{
    border: none;
    background: none;
    cursor: pointer;
  }
`

export const AddTarefaArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    padding: 0.4rem 0.7rem;
    border-radius: 1rem;
    margin-bottom: 0.3rem;
    border: none;
    outline: none;
    width: 80%;
    text-align: center;
  }
`

export const ButtonAddTarefa = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover{
    background-color: #cee5eb;
  }
`