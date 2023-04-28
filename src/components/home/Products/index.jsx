"use client"
import Product from '@/components/home/Product';
import {useSelector} from 'react-redux';


const Products = ({products}) => {
    const {sort} = useSelector(state => state.products)
    const {activeCategory} =  useSelector(state=> state.categories)
    console.log(activeCategory, "aktif ca")
    return (
        <div className="justify-between gap-5 flex flex-wrap">
            {
              activeCategory === undefined
                ? products?.sort((a, b) => sort === 'inc' ? a.price - b.price : sort === 'dec' ? b.price - a.price : '')
                      .map((product, i) => (
                          <Product key={i} {...product}/>
                      ))
                  :   products?.filter(pro => pro.category === activeCategory)
                      .sort((a, b) => sort === 'inc' ? a.price - b.price : sort === 'dec' ? b.price - a.price : '')
                      .map((product, i) => (
                          <Product key={i} {...product}/>
                      ))
            }
        </div>
    );
};

export default Products;
