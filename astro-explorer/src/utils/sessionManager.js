// src/utils/sessionManager.js

export const saveSessionData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
   };
   
   export const getSessionData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
   };
   
   export const removeSessionData = (key) => {
    localStorage.removeItem(key);
   };
   