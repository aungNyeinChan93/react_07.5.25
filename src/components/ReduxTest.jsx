import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../features/counter/counterSlice'
import { createProduct, removeProduct } from '../features/product/productSlice'

const ReduxTest = () => {
    const dispatch = useDispatch();

    const counterStore = useSelector((store => store.counterReducer));
    const productStore = useSelector((store) => store.productReducer);

    const nameRef = useRef();

    const formSubmit = (e) => {
        e.preventDefault();
        const newProducts = {
            id: Math.random(),
            name: nameRef.current.value,
            price: 4000
        }
        dispatch(createProduct(newProducts))
    }

    return (
        <React.Fragment>
            <section className='w-full h-screen bg-red-100 text-black'>
                <p>Redux</p>
                {counterStore.count}<br />
                <button onClick={() => dispatch(increase())}>+</button><br />
                <button onClick={() => dispatch(decrease())}>-</button>
            </section>
            <section className='w-full h-screen bg-amber-200'>
                {productStore.products.map(p => {
                    return <div className='flex ' key={p.id}>
                        <li >{p.name} || {p.price}</li>
                        <button className='ms-[300px]' onClick={() => dispatch(removeProduct(p.id))}> Delete</button>
                    </div>
                })}

                <form onSubmit={formSubmit}>
                    <input ref={nameRef} type="text" name="name" id="name" placeholder='name' />
                    <button type='submit'> Add</button>
                </form>
            </section>
        </React.Fragment>
    );
};

export default ReduxTest;