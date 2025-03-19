import {Link} from "@/i18n/navigation";

const Header: React.FC = () => {
    return (
        <header className="ui-header flex">
            <div className="w-full max-w-[1280px] mx-auto flex justify-center items-center">
                <Link href="/">
                    <div className="flex items-center justify-center p-4 text-white text-shadow">
                        <div className="text-right">
                            <span className="text-2xl font-bold tracking-[0.5rem] glitch">SUNG</span>
                        </div>
                        <div className="w-25 text-5xl font-extrabold text-center tracking-[0.25rem]">
                            <span className="">VS</span>
                        </div>
                        <div className="text-left">
                            <span className="text-2xl font-bold tracking-[0.5rem] glitch">BERU</span>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
