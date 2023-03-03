import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementBy, incrementBy } from '../../redux/global/actions';

const CounterForTest = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((store) => store.global);
  const [numberOfIncrement, setNumberOfIncrement] = useState(1);
  const [numberOfDecrement, setNumberOfDecrement] = useState(1);
  return (
    <div className="w-screen h-screen bg-black flex flex-wrap justify-center items-center gap-3">
      <div className="flex gap-2 border-2 border-indigo-400 px-4 py-2 rounded-2xl">
        <input
          type="range"
          id="incrementRange"
          min={1}
          max={100}
          value={numberOfIncrement}
          onChange={(e) => setNumberOfIncrement(Number(e.target.value))}
        />
        <button
          onClick={() => dispatch(incrementBy(numberOfIncrement))}
          className="bg-slate-500 px-4 py-2 rounded font-bold text-xl"
        >
          Increment {numberOfIncrement}
        </button>
      </div>
      <div className="flex gap-2 border-2 border-indigo-400 px-4 py-2 rounded-2xl">
        <input
          type="range"
          id="decrementRange"
          min={1}
          max={100}
          value={numberOfDecrement}
          onChange={(e) => setNumberOfDecrement(Number(e.target.value))}
        />
        <button
          onClick={() => dispatch(decrementBy(numberOfDecrement))}
          className="bg-slate-500 px-4 py-2 rounded font-bold text-xl"
        >
          Decrement {numberOfDecrement}
        </button>
      </div>
      <p className="px-4 py-2 bg-red-400 border-2 border-red-500 rounded-xl font-extrabold text-xl text-slate-600">
        {counter}
      </p>
    </div>
  );
};

export default CounterForTest;
