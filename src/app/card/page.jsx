
import CardProducts from '@/components/card/CardProducts';
import Payment from '@/components/card/Payment';

const Card = () => {

    return (
        <div className="flex gap-2">
            <CardProducts/>
            <Payment/>
        </div>
    );
};

export default Card;
