import SliderComp from '@/components/home/SliderComp';
import Sorting from '@/components/home/Sorting';
import Category from '@/components/home/Category';
import Products from '@/components/home/Products';
import {getProducts} from '@/redux/productsSlice';
import {getCategories} from '@/redux/categorySlice';
import {store} from '@/redux/store';

const Home = async() => {
    const pro = store.dispatch(getProducts())
    const cat =  store.dispatch(getCategories())

    const [{payload: products}, {payload: categories}] = await Promise.all([pro, cat])

    return (
        <main>
            <SliderComp/>
            <Sorting/>
            <div className="flex mt-5 gap-5">
                <Category categories={categories}/>
                <Products products={products}/>
            </div>
        </main>
    );
};

export default Home;