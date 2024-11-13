const custom = () => {
    /**
     * @param {string} endpoint
     * @param {RequestInit} options
     */
    const customFetch = async (endpoint = '', options = {}) => {
        /**
         * @type {RequestInit}
         */
        const defaultHeader = {
            accept: 'application/json'
        };
        options.method = 'GET';
        options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;
        const res = await fetch(endpoint, options);
        return await (res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status,
                statusText: res.statusText
            }));
    };
    return (url, options = {}) => customFetch(url, options);
};
export const customGet = custom();