import { apiSlice } from "./apiSlice";
import { USER_URL } from '../features/constants'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/auth`,
                method: "POST",
                body:data,
            })
        })
    })
})