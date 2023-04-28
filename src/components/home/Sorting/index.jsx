"use client"
import {useDispatch} from 'react-redux';
import {sortChange} from '@/redux/productsSlice';

const Sorting = () => {
    const dispatch = useDispatch()
    const handleChange = (value) => {
        dispatch(sortChange(value))
    }
    return (
        <div className="flex bg-gray-100 items-center justify-end p-5 mt-8">
            <select onChange={e => handleChange(e.target.value)} className="bg-gray-200 px-6 py-3" name="" id="">
                <option disabled selected value="">Seçiniz</option>
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>
            </select>
        </div>
    );
};

export default Sorting;
