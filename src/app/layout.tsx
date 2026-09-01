import './globals.css';import {CartProvider} from '@/components/cart';import {Header,Footer} from '@/components/layout';
export const metadata={title:'JUST PRINT. | Premium Custom T-Shirts',description:'Premium personalized T-shirts and professional DTF printing.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><CartProvider><Header/>{children}<Footer/></CartProvider></body></html>}
