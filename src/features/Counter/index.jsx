import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {   
    const dispatch = useDispatch();
    const count = useSelector(state =>state.count);

    const handleIncreaseClick = () =>{
        const action = increase(123);// action creator 
        dispatch(action);
    }
    const handleDecreaseClick = () =>{
        const action = decrease();// action creator
        dispatch(action);
    }

    return (
        <div>
            Counter : {count}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>

        </div>
    );
}

export default CounterFeature;