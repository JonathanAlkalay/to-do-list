import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import appConfig from "../../app-config";


const rootApiSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: appConfig.backendBaseUrl }),
    endpoints: builder => ({ })
});

export default rootApiSlice