import React from 'react';
import {NavLink} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

function Menu({items}) {

    return (
        items.map(item => {
            return (
                <div key={uuidv4()} className={'m-2'}>
                    {item === 'Cars'
                        ? <NavLink className={'btn btn-button border text-decoration-none'} to={``}>{item}</NavLink>
                        : <NavLink className={'btn btn-button border text-decoration-none'} to={`${item.toLowerCase()}`}>{item}</NavLink>}
                </div>
            )
        })
    );
}

export default Menu;