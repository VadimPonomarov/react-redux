import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {ErrorMessage} from '@hookform/error-message';

import {carActions, getAll} from "../../store/reducers/carReducer";
import Cars from "../cars/Cars";
import TabHeader from "../tabheader/TabHeader";

const CarForm = () => {
    const dispatch = useDispatch();
    const macroState = useSelector(state => state.cars)
    const state = useSelector(state => state.cars.cars)
    const carInitialState = {curId: '', model: '', price: '', year: ''}
    const currentId = useSelector(state => state.cars.current)

    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: {errors, isValid}
    } = useForm({defaultValues: carInitialState, mode: "onTouched"});

    const submit = (data) => {
        if (!currentId) {
            dispatch(carActions.addCar({data: {id: uuidv4(), ...data}}))
            dispatch(carActions.clearCurrent())
            reset()

        } else {
            dispatch(carActions.updateCar({data: {id: currentId, ...data}}))
            dispatch(carActions.clearCurrent())
            reset()
        }
    }

    const handleOnChange = (id) => {
        reset()
        const currentCar = state.find(car => car.id === id) || carInitialState
        setValue('curId', currentCar.curId)
        setValue('model', currentCar.model)
        setValue('price', currentCar.price)
        setValue('year', currentCar.year)
    }

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <div>
            {
                macroState.status === 'loading' &&
                <div className="d-flex spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }

            <form
                className={
                    'd-flex ' +
                    'flex-wrap ' +
                    'container ' +
                    'm-2 ' +
                    'border ' +
                    'mt-2 ' +
                    'p-2 ' +
                    'm-auto ' +
                    'justify-content-center'
                }
                onSubmit={handleSubmit(submit)}
            >
                <div className={'border container ps-4'}>
                    <label className={'border m-1'}>Id: {currentId}
                        <input className={'border ms-2'}
                               type="hidden" {...register('curId')}/>
                    </label>
                </div>
                <div className={'m-2'}>
                    <label>Model:
                        <input className={'border ms-2'}
                               type="text" {...register('model',
                            {
                                required: 'Required Model',
                                minLength: {value: 2, message: 'Model: length should not be less than 2 symbols'}
                            })}
                        />
                    </label>
                </div>
                <div className={'m-2'}>
                    <label>Price:
                        <input className={'border ms-2'}
                               type="text" {...register('price',
                            {
                                required: 'Required Price',
                                pattern: {
                                    value: /^[1-9]\d{1,9}$/g,
                                    message: 'Price: should be of INTEGER type up to 10 digits'
                                }
                            })}/>
                    </label>
                </div>
                <div className={'m-2'}>
                    <label>Year:
                        <input className={'border ms-2'}
                               type="text"
                               {...register('year',
                                   {
                                       required: 'Required Year',
                                       pattern: {
                                           value: /^\d{4,4}$/g,
                                           message: 'Year: should be "YYYY" - like "1997"'
                                       }
                                   }
                               )}
                        />
                    </label>
                </div>
                <div className={'m-2'}>
                    <input type='submit' disabled={!isValid} value='Save'/>
                </div>
            </form>
            <div className={'container d-flex flex-wrap text-danger justify-content-center'}>
                <div className={'ms-4 mt-2 mb-2'}><ErrorMessage errors={errors} name="model"/></div>
                <div className={'ms-4 mt-2 mb-2'}><ErrorMessage errors={errors} name="price"/></div>
                <div className={'ms-4 mt-2 mb-2'}><ErrorMessage errors={errors} name="year"/></div>
            </div>


            <div className={'m-2 text-center'}>
                <button className={'btn btn-button border text-primary col-3'} onClick={() => {
                    reset();
                    dispatch(carActions.clearCurrent())
                }}>
                    Reset
                </button>
            </div>


            {state.length > 0 &&
            <div>
                <TabHeader/>
                <Cars state={state} handleOnChange={handleOnChange}/>
            </div>
            }

        </div>
    );
};

export default CarForm;