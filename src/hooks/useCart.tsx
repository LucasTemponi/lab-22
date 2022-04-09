import create from 'zustand'
import { ProductProps } from '../components/Product';

interface cartProps{
    items: {id:number,quantity:number}[],
    contaItems:number,
    incrementaItem:(idNovoItem:number)=>void,
    decrementaItem:(idNovoItem:number)=>void,
}

export const useCart = create<cartProps>((set)=> ({
    items:[],
    contaItems:0,
    precoTotal:0,
    incrementaItem:(idNovoItem)=>set((state)=>{
            let checkForItem = state.items.find(element=>element.id===idNovoItem)
            if (checkForItem){
                checkForItem.quantity+=1;
                state.contaItems+=1;
                console.log(state.items)
            }else{
                state.items.push({id:idNovoItem,quantity:1})
                state.contaItems+=1;
            } 
            console.log(state.contaItems)
        }),
        decrementaItem:(idNovoItem)=>set(({items})=>{
            let checkForItem = items.find(element=>element.id===idNovoItem)
            if (checkForItem && checkForItem.quantity>0 ){
                checkForItem.quantity-=1
                console.log(items)
            } 
        }),
    })
)

