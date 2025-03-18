import {Link} from "@/i18n/navigation";

const Header: React.FC = () => {
    return (
        <header className="ui-header">
            <div className="max-w-[1280px] mx-auto p-4 flex justify-center items-center text-3xl text-white">
                <Link href="/" className="font-bold text-2xl">
                    <span className="text-shadow-blue">JINWOO</span>
                    <span className="text-shadow mx-5"> VS </span>
                    <span className="text-shadow-red">BERU</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
