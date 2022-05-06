import React from "react";
import "../css/Navbar.css";
import { useMantineColorScheme } from "@mantine/core";

const Navbar = () => {
    const { toggleColorScheme } = useMantineColorScheme();

    const toggle = ()=>{
      console.log("hello");
      toggleColorScheme();
    }

    return (
        <>
            <div className="navbar">
                <h3 className="navbar_head">E-commerce</h3>
                <div className="toggle">
                    <h4 className="tog">Light</h4>
                    <input type="checkbox" id="switch" onChange={toggle}/><label htmlFor="switch">Toggle</label>
                    <h4 className="tog">Dark</h4>
                </div>
            </div>
        </>
    );
}

export default Navbar;