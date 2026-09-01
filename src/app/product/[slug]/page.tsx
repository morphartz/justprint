import {products} from '@/lib/products';import ProductClient from './product-client';
export default async function Product({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(x=>x.slug===slug)||products[0];return <ProductClient product={p}/>}
