import create from 'zustand'
import { ProductProps } from '../components/Product';

interface cartProps{
    items: {id:number,quantity:number}[],
    incrementaItem:(idNovoItem:number)=>void,
    decrementaItem:(idNovoItem:number)=>void,
}

export const useCart = create<cartProps>((set)=> ({
    items:[],
    incrementaItem:(idNovoItem)=>set(({items})=>{
            let checkForItem = items.find(element=>element.id===idNovoItem)
            if (checkForItem){
                checkForItem.quantity+=1
                console.log(items)
            }else{
                items.push({id:idNovoItem,quantity:1})
            } 
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

