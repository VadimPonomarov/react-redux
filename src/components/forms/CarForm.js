import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid'

import {carActions, getAll, createCar} from "../../store/carReducer";
import Cars from "../cars/Cars";
import TabHeader from "../tabheader/TabHeader";

const CarForm = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();
    const state = useSelector(state => state.cars.cars)

    const submit = (data) => {
        //dispatch(carActions.addCar({data: {id: uuidv4(), ...data}}))
        dispatch(createCar({data: {id: uuidv4(), ...data}}, dispatch))
        reset()
    }
    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])


    return (
        <div>
            <form className={'d-flex flex-wrap container m-2 border mt-2 p-2 m-auto justify-content-center'}
                  onSubmit={handleSubmit(submit)}>
                <div className={'m-2'}>
                    <label>Model:
                        <input className={'border'} type="text" {...register('model')}/>
                    </label>
                </div>
                <div className={'m-2'}>
                    <label>Price:
                        <input className={'border'} type="text" {...register('price')}/>
                    </label>
                </div>
                <div className={'m-2'}>
                    <label>Year:
                        <input className={'border'} type="text" {...register('year')}/>
                    </label>
                </div>
                <div className={'m-2'}>
                    <button>Save</button>
                </div>
            </form>
            {state
            &&
            <div>
                <TabHeader/>
                <Cars state={state}/>
            </div>
            }
        </div>
    );
};

export default CarForm;