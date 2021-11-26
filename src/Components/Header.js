import React, { useState } from "react";
import Navigation from './Navigation';

function Header() {
    return (
        <header className="border-b p-3 font-bold flex justify-between items-center">
            AppName
            <Navigation />
        </header>
    )

}

export default Header