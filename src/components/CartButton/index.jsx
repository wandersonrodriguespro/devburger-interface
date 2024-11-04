import Cart from "../../assets/img-cart.svg"
import { ContainerButton } from "./style"

export function CartButton ({...props}){
    return(
        <ContainerButton>
            <img src={Cart} alt="carrinho-de-compras"/>
        </ContainerButton>
    )
}