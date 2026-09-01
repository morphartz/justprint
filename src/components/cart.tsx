'use client';
import {createContext,useContext,useEffect,useMemo,useState} from 'react';
export type CartItem={id:string;productId:number;name:string;price:number;size:string;color:string;qty:number;image:string;custom?:{text?:string;font?:string;placement?:string}};
const Ctx=createContext<any>(null);
export function CartProvider({children}:{children:React.ReactNode}){const [items,setItems]=useState<CartItem[]>([]);useEffect(()=>{try{setItems(JSON.parse(localStorage.getItem('jp-cart')||'[]'))}catch{}},[]);useEffect(()=>{localStorage.setItem('jp-cart',JSON.stringify(items))},[items]);const add=(item:CartItem)=>setItems(x=>{const i=x.findIndex(a=>a.id===item.id);if(i<0)return [...x,item];const n=[...x];n[i]={...n[i],qty:n[i].qty+item.qty};return n});const remove=(id:string)=>setItems(x=>x.filter(i=>i.id!==id));const update=(id:string,qty:number)=>setItems(x=>qty<1?x.filter(i=>i.id!==id):x.map(i=>i.id===id?{...i,qty}:i));const total=useMemo(()=>items.reduce((s,i)=>s+i.price*i.qty,0),[items]);return <Ctx.Provider value={{items,add,remove,update,total,count:items.reduce((s,i)=>s+i.qty,0)}}>{children}</Ctx.Provider>};
export const useCart=()=>useContext(Ctx);
