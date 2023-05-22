import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";


const useToggle = (responseData, status)=> {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        const toggleItem = responseData.shoe.find((elem)=>elem.id === responseData.id)
        console.log(toggleItem);
        dispatch(cartActions.addToFavorite(toggleItem))
        responseData.setShoes(
            responseData.shoe.map((elem) => {
                if (elem.id === responseData.id) {   
                    if (!status) {
                        return {
                            ...elem,
                            heartIsClicked : !elem.heartIsClicked
                        }   
                    } else{
                        return {
                            ...elem,
                            cartIsClicked : !elem.cartIsClicked
                        }
                    }
                }
                return elem
            })
        )
        console.log(responseData.shoe);
    };
    return {
        toggleHandler,
    }
};

export default useToggle;