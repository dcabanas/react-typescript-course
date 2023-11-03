import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type SessionItem = {
    id: string
    title: string
    summary: string
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
        },
        cancelSession: (state, action: PayloadAction<string>) => {
        }
    }
})

export const {bookSession, cancelSession} = sessionsSlice.actions