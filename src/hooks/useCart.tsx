import create from 'zustand'
import { ProductProps } from '../components/Product';

interface cartProps{
    items: {id:number,quantity:number}[],
    incrementaItem:(novoItem:{id:number,quantity:number})=>void;
}

export const useCart = create<cartProps>((set)=> ({
    items:[],
    incrementaItem:(novoItem)=>set(({items})=>{
            items.push(novoItem) 
            console.log(items)  
        })
    }),
)

