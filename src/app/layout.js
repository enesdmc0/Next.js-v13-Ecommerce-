import Navbar from '@/components/navbar';
import "@/styles/reset.css";
import "./globals.css";
import StoreProvider from '@/redux/storeProvider';
import {store} from "@/redux/store";
import {Cabin} from 'next/font/google';

const cabin = Cabin({
    subsets: ["latin"]
})

export default function RootLayout({children}) {
    const {products, productDetail} = store.getState().products
    const {categories} = store.getState().categories
    return (
        <html lang="en" className={cabin.className}>
        <body>
       <StoreProvider preloadedState={{
           products: {products, productDetail},
           categories: {categories},
       }}>
           <div className="w-10/12 m-auto">
               <Navbar/>
               <main>
                   {children}
               </main>
           </div>
       </StoreProvider>
        </body>
        </html>
    );
}
