import * as React from "react";
import Navbar from './Navbar';

interface IMenuProps {
    isMenuOpen: boolean;
}
export const Menu = ({ isMenuOpen }: IMenuProps) => {
    return (<>
        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
            <Navbar />
        </div >
    </>);
};
