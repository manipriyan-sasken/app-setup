import { apiSlice } from "./apiSlice";

export const authAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `/users`,
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUsersQuery } = authAPISlice;
