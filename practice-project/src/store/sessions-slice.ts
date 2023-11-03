import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type SessionItem = {
    id: string
    title: string
    summary: string
    date: string
}

type SessionState = {
    items: SessionItem[]
}

const initialState: SessionState = {
    items: []
}

export const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        bookSession: (state, action: PayloadAction<SessionItem>) => {
            state.items.push(action.payload)
        },
        cancelSession: (state, action: PayloadAction<string>) => {
            const foundIndex = state.items.findIndex(session => session.id == action.payload)
            state.items.splice(foundIndex, 1)
        }
    }
})

export const {bookSession, cancelSession} = sessionsSlice.actions