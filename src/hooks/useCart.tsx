import create from 'zustand';
import { ProductProps } from '../components/Product';

interface cartProps{
    items: (ProductProps & {quantity:number})[],
    contaItems:number,
    precoTotal:number,
    incrementaItem:(novoItem:ProductProps)=>void,
    decrementaItem:(novoItem:ProductProps)=>void,
}

export const useCart = create<cartProps>((set)=> ({
    items:[],
    contaItems:0,
    precoTotal:0,
    incrementaItem:(novoItem)=>set((state)=>{
            let checkForItem = state.items.find(element=>element.id===novoItem.id)
            if (!checkForItem){
                state.items.push({...novoItem,quantity:1})
                state.contaItems+=1;
                state.precoTotal+=novoItem.price;                
            }else if(checkForItem.stock===checkForItem.quantity || checkForItem.stock===0){
                alert(`No momento possuimos apenas ${checkForItem.stock} unidades deste produto`)
                return;
            }else{
                checkForItem.quantity+=1;
                state.contaItems+=1;
                state.precoTotal+=novoItem.price;
            } 
            console.log(state)
        }),
        decrementaItem:(novoItem)=>set((state)=>{
            let checkForItem = state.items.find(element=>element.id===novoItem.id)
            if (!checkForItem){
                return;
            } else if (checkForItem.quantity===1 ){
                const itemIndex = state.items.indexOf(checkForItem)
                state.contaItems-=1;
                state.precoTotal-=novoItem.price;
                state.items.splice(itemIndex,1)
            } else{
                checkForItem.quantity-=1
                state.contaItems-=1;
                state.precoTotal-=novoItem.price;
            }
        })
    })
)