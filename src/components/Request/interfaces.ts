import { MatchResult } from "path-to-regexp";
import { StateFn } from "../State";

export interface RequestParams {
  state: StateFn;
  matches: MatchResult<any>;
  body: any;
  headers: Headers;
  request: Request;
}

export interface ScheduledParams {
  state: StateFn;
  event?: any;
  env?: any;
  ctx?: any;
}

export type Handler = ((params: RequestParams) => Response | Promise<Response>);

export interface RouteObject {
  [route: string]: Handler;
}