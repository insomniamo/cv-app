import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: 'EN'
    },
    reducers: {
        changeLanguage: (state) => {
            state.language = state.language === 'EN' ? 'RU' : 'EN';
        }
    }
})

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer