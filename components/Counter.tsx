import { Button, Text, View } from 'react-native';

import React from 'react';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT'; by: number };
const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - action.by };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <View>
      <Text>{state.value}</Text>
      <Button title="+1" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="-1" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
};

export default Counter;
