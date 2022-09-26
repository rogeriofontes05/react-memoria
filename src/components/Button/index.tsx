import * as C from './styles';

type Props = {
    label: string;
    icon?: any; // Colocando uma interrogação informa que esse item é opcional. nesse exemplo caso aja algum problema com o icone, isso garente que não haverá problemas na criação do botão. 
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({ label, icon, onClick  }: Props) => {
    return(
        <C.Container onClick={onClick}>
            {icon && //caso aja icon useo. se não não faça nada.
                <C.IconArea>
                    <C.Icon src={icon} />{/* caso remova o item, não haverpa problemas pois o mesmo foi informado que se tratava de um item opcional com o usa da "?" em sua declaração.*/}
                </C.IconArea>
            }
            <C.Label>{ label }</C.Label>
        </C.Container>
    );
}