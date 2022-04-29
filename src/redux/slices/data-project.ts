import { getTypographyUtilityClass } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pertCalculate } from 'src/utils/pert'

// Define a type for the slice state
interface DataState {
  name: string,
  cost: number,
  pert: (number)[],
  graph: (number)[]
}

// Define the initial state using that type
const initialState: DataState = {
  name: "",
  cost:0,
  pert:[0,0,0],
  graph:[0,0,0,0,0,0]
};

export const slice = createSlice({
  name: 'dataProject',
  initialState,
  reducers: {
    nameProject: (state: DataState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    costProject: (state: DataState, action: PayloadAction<number>) => {
        state.cost = action.payload;
    },
    activityProject: (state: DataState, action: PayloadAction<(string|number)[]>) => {
      const value = action.payload
      const days = pertCalculate({activity: value})
      state.pert = days;
    },
    dataGraph:(state: DataState, action: PayloadAction<(number)[]>) => {
      state.graph = action.payload;
    },
  },
});

export const { reducer } = slice;

export const { nameProject, costProject, activityProject, dataGraph } = slice.actions


