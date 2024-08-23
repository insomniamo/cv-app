import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice'; // Проверьте путь к файлу

const store = configureStore({
    reducer: {
      language: languageReducer, // Название редьюсера должно совпадать с ключом состояния
    },
});

export default store;
