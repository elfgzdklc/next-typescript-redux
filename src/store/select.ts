import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedOptionState {
    selectedOption: string | null;
}

const initialState: SelectedOptionState = {
    selectedOption: null,
};

const selectedOptionSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        setSelectedOption: (state, action: PayloadAction<string>) => {
            state.selectedOption = action.payload;
        },
    },
});

export const { setSelectedOption } = selectedOptionSlice.actions;
export default selectedOptionSlice.reducer;
