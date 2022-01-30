import React from 'react';

import Menu from "../components/menu/Menu";
import {Outlet} from "react-router-dom";

function MainLayout() {
    const menuItems = ['Cars', 'Users', 'Posts', 'Comments']

    return (
        <div>
            <div className={'d-flex navbar navbar-light bg-light justify-content-center mb-2 mt-2'}>
                <Menu items={menuItems}/>
            </div>
            <Outlet/>
        </div>
    );
}

export default MainLayout;