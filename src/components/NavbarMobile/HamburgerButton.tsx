import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

type HamburgerButtonProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerButton({isMenuOpen, setIsMenuOpen}: HamburgerButtonProps) {

    const buttonStyle = "h-8 w-8 hover:text-gray-400 active:text-gray-400";

    return (
        <a onClick={() => setIsMenuOpen(!isMenuOpen)} className="pl-3">
            <RxHamburgerMenu aria-label="Open menu" className={`${isMenuOpen ? 'hidden' : 'hamburger-button'} ${buttonStyle}`} />
            <GrClose aria-label="Close menu" className={`${isMenuOpen ? 'hamburger-button' : 'hidden'} ${buttonStyle}`} />
        </a>
    );
}
