let isServerOffline = false;
export const getServerOfflineStatus = () => isServerOffline;
export const setServerOfflineStatus = (value) => {
    isServerOffline = value;
};
