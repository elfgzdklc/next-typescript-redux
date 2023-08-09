import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedCheckboxesState {
    checkedItems: string[];
}

const initialState: SelectedCheckboxesState = {
    checkedItems: [],
};

const selectedCheckboxesSlice = createSlice({
    name: 'checked',
    initialState,
    reducers: {
        toggleCheckbox: (state, action: PayloadAction<string>) => {
            const index = state.checkedItems.indexOf(action.payload);
            if (index !== -1) {
                state.checkedItems.splice(index, 1);
            } else {
                state.checkedItems.push(action.payload);
            }
        },
    },
});

export const { toggleCheckbox } = selectedCheckboxesSlice.actions;
export default selectedCheckboxesSlice.reducer;
