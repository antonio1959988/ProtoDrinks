import {StateCreator} from 'zustand'
import { Recipe } from '../types'

export type favoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<favoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)){
            // Existe, borrar
            set({
                favorites: [...get().favorites].filter(fav => fav.idDrink !== recipe.idDrink),
            })        
        } else {
            // No existe, agregar
            set({
                favorites: [...get().favorites, recipe]
            })
        }
        // Guardar en localstorage
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(fav => fav.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})