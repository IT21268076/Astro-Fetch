// src/utils/favoritesManager.js

import { saveSessionData, getSessionData } from './sessionManager';

export const addToFavorites = (item) => {
    console.log(item)
 const favorites = getSessionData('favorites') || [];
 const updatedFavorites = [...favorites, item];
 saveSessionData('favorites', updatedFavorites);
};

export const removeFromFavorites = (itemId) => {
 const favorites = getSessionData('favorites') || [];
 const updatedFavorites = favorites.filter(item => item.id !== itemId);
 saveSessionData('favorites', updatedFavorites);
};
