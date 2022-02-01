import React from 'react';
import {useSelector, useDispatch} from "react-redux"

import {carActions} from "../../store/reducers/carReducer";
import Car from "../car/Car";

function Cars({handleOnChange}) {
    const state = useSelector(state => state.cars.cars)
    const dispatch = useDispatch()

    const handleClick = (id, action) => {
        switch (action) {
            case 'delete': {
                dispatch(carActions.deleteCar({id}))
                dispatch(carActions.clearCurrent())
                break
            }
            case 'modify': {
                dispatch(carActions.setCurrent({id}))
                handleOnChange(id)
                break
            }
        }
    }

    return (

        state.map(car => {
            return (
                <Car key={car.id}
                     car={car}
                     handleClick={handleClick}
                     carId={car.id}
                />
            )
        })
    )
}

export default Cars;