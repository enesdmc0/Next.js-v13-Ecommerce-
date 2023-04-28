'use client';
import {useDispatch} from 'react-redux';
import {selectCategory} from '@/redux/categorySlice';


const Category = ({categories}) => {
    const dispatch = useDispatch();


    const handleClick = (cat) => {
        dispatch(selectCategory(cat));
    };

    return (
        <div className="w-1/6 bg-gray-100 p-4 flex flex-col gap-3 max-h-screen">
            <h1 className="border-b border-b-gray-300 text-xl font-bold ">Kategoriler</h1>
            <nav className="flex flex-col gap-2">
                {categories?.map((category, i) => (
                    <div onClick={() => handleClick(category)} className="hover:bg-gray-300 cursor-pointer p-2"
                         key={i}>{category}</div>
                ))}
            </nav>
        </div>
    );
};

export default Category;
