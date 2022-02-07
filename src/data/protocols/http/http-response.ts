export enum HttpStatusCode {
  noContent = 400,
  unathorized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
