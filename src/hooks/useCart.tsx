import create from 'zustand'
import { ProductProps } from '../components/Product';

interface cartProps{
    items: {id:number,quantity:number}[],
    incrementaItem:(novoItem:{id:number,quantity:number})=>void,
    decrementaItem:(novoItem:{id:number,quantity:number})=>void,
}

export const useCart = create<cartProps>((set)=> ({
    items:[],
    incrementaItem:(novoItem)=>set(({items})=>{
            let checkForItem = items.find(element=>element.id===novoItem.id)
            if (checkForItem){
                checkForItem.quantity+=1
                console.log(items)
            }else{
                items.push(novoItem)
            } 
        }),
        decrementaItem:(novoItem)=>set(({items})=>{
            let checkForItem = items.find(element=>element.id===novoItem.id)
            if (checkForItem && checkForItem.quantity>0 ){
                checkForItem.quantity-=1
                console.log(items)
            } 
        }),
    })
)

