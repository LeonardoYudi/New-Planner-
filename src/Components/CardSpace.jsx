import { CardArea , CardList, Card, ButtonAddTarefa,HeaderCard,AddTarefaArea,OptionsCard} from "../Sections/Screen";
import { FaTimesCircle } from "react-icons/fa";
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