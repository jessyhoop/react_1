const helpHttp = () => {
    /**
     * Helper para peticiones fetch
     * @param {string} url
     * @param {RequestInit} options
     * @returns {Promise<any>>}
     */
    const customFetch = async (url = '', options = {}) => {
        /**@type {HeadersInit} */
        const defaultHeader = {
            accept: 'application/json'
        };
        options.method = options.method || 'GET';
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader;
        options.body = JSON.stringify(options.body) || null;
        if (!options.body) {
            delete options.body;
        }
        return fetch(url, options)
            .then(response => response.ok ? response.json() : Promise.reject({
                error: true,
                status: response.status || '00',
                statusText: response.statusText || 'Ocurri\u00F3 un error :('
            }));
    }
    const get = (url = '', options = {}) => {

        return customFetch(url, options);
    }
    const post = (url = '', options = {}) => {
        options.method = 'POST';
        return customFetch(url, options);
    }
    const put = (url = '', options = {}) => {
        options.method = 'PUT';
        return customFetch(url, options);

    }
    const del = (url = '', options = {}) => {
        options.method = 'DELETE';
        return customFetch(url, options);

    }

    return {
        get, post, put, del
    }


}
export const generateRequest = helpHttp();
