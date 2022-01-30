import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"

import {deleteCarThunk, getAll} from "../../store/carReducer";

function Cars() {
    const state = useSelector(state => state.cars.cars)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(deleteCarThunk({id}))
        dispatch(getAll())
    }

    return (

    state.map(car => {
        return (
            <div key={car.id} className={'d-flex offset-3 col-6 mt-2'}>
                <div className={'col-2 border p-2'}>{car.id}</div>
                <div className={'col-4 border p-2'}>{car.model}</div>
                <div className={'col-2 border p-2'}>{car.price}</div>
                <div className={'col-2 border p-2'}>{car.year}</div>
                <button onClick={() => handleClick(car.id)} className={'col-2 border'}>Delete
                </button>
            </div>
        )
    })
)
    ;
}

export default Cars;