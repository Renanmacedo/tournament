
export const getTheme = () => {

    const location = window && window.location
    const hostName = location.host.replace(/\.(([a-zA-Z:0-9]))+/ig,'')

    return hostName || 'default'
}