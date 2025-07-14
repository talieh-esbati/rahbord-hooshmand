import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '@/types/Product';
import { User } from '@/types/User';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({ query: () => 'products' }),
    getUsers: builder.query<User[], void>({ query: () => 'users' }),
    getUserById: builder.query<User, number>({ query: (id) => `users/${id}` }),
  }),
});

export const { useGetUsersQuery, useGetProductsQuery, useGetUserByIdQuery } = storeApi;
