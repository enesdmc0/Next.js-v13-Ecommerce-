import NavbarLeft from '@/components/navbar/navbarLeft';
import NavbarRight from '@/components/navbar/navbarRight';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-3 pb-10">
            <NavbarLeft/>
            <NavbarRight/>
        </div>
    );
};

export default Navbar;
