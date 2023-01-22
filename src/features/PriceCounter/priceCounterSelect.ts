import type { RootState } from 'store';

export const selectPriceCounter = (state: RootState) => state.counter;