import { RestHandler, RESTMethods, rest as baseRest } from 'msw';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function createRestHandler(method: RESTMethods) {
  return (url: string, resolver: Parameters<typeof baseRest.all>[1]) => {
    return new RestHandler(method, `${BASE_URL}${url}`, resolver);
  };
}

export const rest = {
  head: createRestHandler(RESTMethods.HEAD),
  get: createRestHandler(RESTMethods.GET),
  post: createRestHandler(RESTMethods.POST),
  put: createRestHandler(RESTMethods.PUT),
  delete: createRestHandler(RESTMethods.DELETE),
  patch: createRestHandler(RESTMethods.PATCH),
  options: createRestHandler(RESTMethods.OPTIONS),
};
