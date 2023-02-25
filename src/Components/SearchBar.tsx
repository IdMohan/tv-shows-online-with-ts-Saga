import { FC, InputHTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs"
import LogoMain from "./../img/tvshow-logo-1.png" 
import DownArrow from "./../img/down-arrow-1.png"

type SearchBarProps = {} & InputHTMLAttributes<HTMLInputElement>;

const SearchBar: FC<SearchBarProps> = (props) => {
    return (
        <div className="h-[100vh] flex flex-col content-center justify-center">
            <img src={LogoMain} alt="Logo" className="img_logo h-[170px] text-center w-2/4 ml-auto mr-auto" />
            <div className="relative mb-8">
                <input type="text"
                    {...props}
                    className="w-full p-4 rounded-full border border-black flex content-center justify-center" placeholder="Search" />
                <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            <h4 className="text-white text-xl text-center">Find Your Show Live </h4>
            <h6 className="text-xm text-white text-center">Just Type in Search & Scroll Down</h6>

                 <span className="text-center ml-auto mr-auto mt-8">
                    <img src={DownArrow} alt="scroll down arrow" className="w-16 border rounded-full p-2 border-white text-white text-xm animate-bounce"/> 
                 </span>
        </div>

    )
};

export default SearchBar;