import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Country = {
  __typename?: 'Country';
  alpha2Code: Scalars['String'];
  alpha3Code: Scalars['String'];
  altSpellings?: Maybe<Array<Scalars['String']>>;
  area?: Maybe<Scalars['Float']>;
  borders?: Maybe<Array<Scalars['String']>>;
  callingCodes: Array<Scalars['String']>;
  capital?: Maybe<Scalars['String']>;
  cioc?: Maybe<Scalars['String']>;
  currencies?: Maybe<Array<Currency>>;
  demonym: Scalars['String'];
  flag: Scalars['String'];
  flags?: Maybe<Flags>;
  gini?: Maybe<Scalars['Float']>;
  independent: Scalars['Boolean'];
  languages: Array<Language>;
  latlng?: Maybe<Array<Scalars['Float']>>;
  name: Scalars['String'];
  nativeName?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  population: Scalars['Float'];
  region: Scalars['String'];
  regionalBlocs?: Maybe<Array<RegionalBloc>>;
  subregion: Scalars['String'];
  timezones: Array<Scalars['String']>;
  topLevelDomain: Array<Scalars['String']>;
  translations: Translations;
};

export type Currency = {
  __typename?: 'Currency';
  code: Scalars['String'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type Flags = {
  __typename?: 'Flags';
  png: Scalars['String'];
  svg: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  iso639_1?: Maybe<Scalars['String']>;
  iso639_2: Scalars['String'];
  name: Scalars['String'];
  nativeName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get countries with limit */
  getCountries: Array<Country>;
  /** Search by country name. It can be the native name or partial name */
  getCountriesByName?: Maybe<Array<Country>>;
  /** Get Country by calling code */
  getCountryByCallingCode?: Maybe<Country>;
  /** Get country by its capital city */
  getCountryByCapital?: Maybe<Country>;
  /** Get country by 2-letter code */
  getCountryByCode?: Maybe<Country>;
  /** Get country by its currency */
  getCountryByCurrency?: Maybe<Country>;
  /** Get random countries with limit */
  getRandomCountries: Array<Country>;
  /** Get single random country */
  getRandomCountry: Country;
};


export type QueryGetCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCountriesByNameArgs = {
  exact?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};


export type QueryGetCountryByCallingCodeArgs = {
  callingCode: Scalars['String'];
};


export type QueryGetCountryByCapitalArgs = {
  capital: Scalars['String'];
  exact?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCountryByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetCountryByCurrencyArgs = {
  currency: Scalars['String'];
  exact?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetRandomCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type RegionalBloc = {
  __typename?: 'RegionalBloc';
  acronym: Scalars['String'];
  name: Scalars['String'];
  otherAcronyms?: Maybe<Array<Scalars['String']>>;
  otherNames?: Maybe<Array<Scalars['String']>>;
};

export type Translations = {
  __typename?: 'Translations';
  br: Scalars['String'];
  de: Scalars['String'];
  es: Scalars['String'];
  fa?: Maybe<Scalars['String']>;
  fr: Scalars['String'];
  hr: Scalars['String'];
  hu: Scalars['String'];
  it: Scalars['String'];
  ja: Scalars['String'];
  nl: Scalars['String'];
  pt: Scalars['String'];
};

export type GetCountriesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetCountriesQuery = { __typename?: 'Query', getCountries: Array<{ __typename?: 'Country', name: string, capital?: string | null | undefined, flag: string }> };

export type GetRandomCountriesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetRandomCountriesQuery = { __typename?: 'Query', getRandomCountries: Array<{ __typename?: 'Country', name: string, capital?: string | null | undefined, flag: string }> };


export const GetCountriesDocument = gql`
    query GetCountries($limit: Int) {
  getCountries(limit: $limit) {
    name
    capital
    flag
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetRandomCountriesDocument = gql`
    query GetRandomCountries($limit: Int) {
  getRandomCountries(limit: $limit) {
    name
    capital
    flag
  }
}
    `;

/**
 * __useGetRandomCountriesQuery__
 *
 * To run a query within a React component, call `useGetRandomCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomCountriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetRandomCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetRandomCountriesQuery, GetRandomCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomCountriesQuery, GetRandomCountriesQueryVariables>(GetRandomCountriesDocument, options);
      }
export function useGetRandomCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomCountriesQuery, GetRandomCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomCountriesQuery, GetRandomCountriesQueryVariables>(GetRandomCountriesDocument, options);
        }
export type GetRandomCountriesQueryHookResult = ReturnType<typeof useGetRandomCountriesQuery>;
export type GetRandomCountriesLazyQueryHookResult = ReturnType<typeof useGetRandomCountriesLazyQuery>;
export type GetRandomCountriesQueryResult = Apollo.QueryResult<GetRandomCountriesQuery, GetRandomCountriesQueryVariables>;