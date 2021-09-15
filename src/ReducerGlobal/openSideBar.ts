import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IIsOpen {
  readonly isOpen: boolean
}

const initialState: IIsOpen = {
  isOpen: false,
}
export const openSideBar = createSlice({
  name: 'OPEN_SIDE_BAR',
  initialState,
  reducers: {
    onOpen: (state, action: PayloadAction<boolean>) => {
      return {
        isOpen: action.payload,
      }
    },
  },
})
export const { onOpen } = openSideBar.actions
export default openSideBar
