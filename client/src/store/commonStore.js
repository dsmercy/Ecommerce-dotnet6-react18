import { create } from 'zustand'
import { createCartSlice, createFishSlice, createGenericSlice, createProductSlice } from './slices'
import { persist } from 'zustand/middleware'

export const commonStore = create(
    persist(
        (...a) => ({
            ...createFishSlice(...a),
            ...createGenericSlice(...a),
            ...createProductSlice(...a),
            ...createCartSlice(...a),
        }),
        { name: 'common-store' },
    ),
)