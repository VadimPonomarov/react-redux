import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from '../../store/reducers/carReducer'


function Car({car, handleClick, carId: id}) {
    const dispatch = useDispatch()

    const handleCheck = (e) => {
        e.target.classList.toggle('checked')
        dispatch(carActions.setChecked({data:{id, checked: e.target.classList.value.includes('checked')}}))
    }

    return (
        <div className={'d-flex flex-wrap container border mt-1 mb-1 m-auto justify-content-center'}>
            <div
                className={'col-4 p-1 d-flex align-items-center text-center justify-content-center'}>
                {car.id}
            </div>
            <div
                className={'col-2 p-1 d-flex align-items-center text-center justify-content-center'}>
                {car.model}
            </div>
            <div
                className={'col-2 p-1 d-flex align-items-center text-center justify-content-center'}>
                {car.price}
            </div>
            <div
                className={'col-2 p-1 d-flex align-items-center text-center justify-content-center'}>
                {car.year}
            </div>
            <div className={'col-2 p-1 d-flex align-items-center text-center justify-content-between'}>
                <div className={'d-flex justify-content-center'}>
                    <button type={'button'} className={'ms-1 btn border'}
                            onClick={() => handleClick(car.id, 'delete')}
                    >
                        Delete
                    </button>
                    <button type={'button'} className={'ms-1 btn border'}
                            onClick={() => handleClick(car.id, 'modify')}
                    >
                        Modify
                    </button>
                </div>
                <div className={'ms-2'}>
                    <input
                        type="checkbox"
                        name='check-box-1'
                        value=""
                        className="form-check-input ms-1"
                        onChange={(e) => handleCheck(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Car;