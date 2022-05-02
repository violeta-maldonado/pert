import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { graphCalculate } from 'src/utils/graph';
import { pertCalculate } from 'src/utils/pert'

// Define a type for the slice state
interface DataState {
  name: string,
  cost: number,
  pert: (string)[],
  graph: (number)[],
  ExcelData: any[]
}
export interface Excel{
  name: string,
  mostLikely: number,
  optimistic: number,
  pessimistic:number
}
// Define the initial state using that type
const initialState: DataState = {
  name: "",
  cost:0,
  pert:['0','0','0'],
  graph:[0,0,0,0,0,0],
  ExcelData:[]
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
    activityProject: (state: DataState, action: PayloadAction<Excel[]>) => {
      const value = action.payload
      const days = pertCalculate({activity: value})
      state.pert = days;
    },
    dataGraph:(state: DataState, action: PayloadAction<Excel[]>) => {
      const value = action.payload
      const dataGraph = graphCalculate({activity: value})
      state.graph = dataGraph;
    },
    dataActivity:(state: DataState, action: PayloadAction<Excel[]>) => {
      const value = action.payload
      const aux:any[] = [] ;
      value.forEach(element => {
        aux.push({name:element.name, optimistic:element.optimistic,
          mostLikely:element.mostLikely,
          pessimistic:element.pessimistic})
      })
      const days = pertCalculate({activity: value})
      aux.push({porcentage:'68 %', hours:days[0]},{porcentage:'95 %', hours:days[1]},{porcentage:'97 %', hours:days[2]});
      state.ExcelData = aux ;
    },
  },
});

export const { reducer } = slice;

export const { nameProject, costProject, activityProject, dataGraph ,dataActivity} = slice.actions


