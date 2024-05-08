import {create} from 'zustand'
import { devtools } from 'zustand/middleware'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { favoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { NotificationSliceType, createNotificationSlice  } from './notificationSlice'

export const useAppStore = create<RecipesSliceType & favoritesSliceType & NotificationSliceType>()( devtools ((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))