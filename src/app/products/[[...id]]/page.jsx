import ProductDetail from '@/components/detail/ProductDetail';
import {getProductDetail} from '@/redux/productsSlice';
import {store} from '@/redux/store';

const Detail = async({params: {id}}) => {
    const {payload: productDetail} = await store.dispatch(getProductDetail(id))
    return (
        <div>
            <ProductDetail productDetail={productDetail}/>
        </div>
    );
};

export default Detail;
