import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions, createCar, deleteCarThunk, getAll} from "../../store/reducers/carReducer";

function TabHeader() {
    const state = useSelector(state => state.cars.cars)
    const dispatch = useDispatch()
    const handleClick = (action) => {
        const checkedCars = state.filter(car => car.checked)
        switch (action) {
            case 'push':
                checkedCars.forEach(car => {
                    const data = {model: car.model, price: car.price, year: car.year}
                    dispatch(createCar({id: car.curId, data}))
                    dispatch(carActions.deleteCar({id: car.id}))
                })
                break
            case 'getAll':
                dispatch(getAll())
                break
            case 'delete':
                checkedCars.forEach(car => {
                    dispatch(deleteCarThunk({id: car.id}))
                    dispatch(carActions.deleteCar({id: car.id}))
                })
                break
        }
    }

    return (
        <div className={'d-flex flex-wrap container m-2 border mt-2 p-2 m-auto justify-content-center bg-info'}>
            <h5 className={'col-4 border p-2 text-center align-items-center d-flex justify-content-center'}>ID</h5>
            <h5 className={'col-2 border p-2 text-center align-items-center d-flex justify-content-center'}>Model</h5>
            <h5 className={'col-2 border p-2 text-center align-items-center d-flex justify-content-center'}>Price</h5>
            <h5 className={'col-2 border p-2 text-center align-items-center d-flex justify-content-center'}>Year</h5>
            <div className={'col-2  d-flex flex-wrap align-items-center justify-content-center border mb-2'}>
                <div className={'col-12 text-center'}><b className={'text-uppercase text-primary'}>Async operations</b></div>
                <button
                    type={'button btn-secondary btn'}
                    className={'btn btn-sm border col-3 m-1 btn-outline-danger p-1'}
                    onClick={() => handleClick('push')}
                    style={{height: '30px'}}
                >
                    <p>Push</p>
                </button>
                <button
                    type={'button btn-secondary btn'}
                    className={'btn btn-sm border col-3 m-1 btn-outline-danger p-1'}
                    onClick={() => handleClick('delete')}
                    style={{height: '30px'}}
                >
                    <p>Delete</p>
                </button>
                <button
                    type={'button btn-secondary btn'}
                    className={'btn btn-sm border col-3 m-1 btn-outline-danger p-1'}
                    onClick={() => handleClick('getAll')}
                    style={{height: '30px'}}
                >
                    <p>Get All</p>
                </button>
            </div>
        </div>
    );
}

export default TabHeader;