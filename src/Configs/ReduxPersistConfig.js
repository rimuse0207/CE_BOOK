import storage from 'redux-persist/lib/storage/session';

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['LoginCheck'],
};
