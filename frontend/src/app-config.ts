interface appConfig {
    backendBaseUrl: string
}

export default {
    
    backendBaseUrl: window["env"].BACKEND_BASE_URL

} as appConfig