import { apiker } from "../Apiker";
import { RESPONSE_HEADERS_DEFAULT, RESPONSE_MESSAGES } from "./constants";

/**
 * Responses
 */
export const res_200 = (message = null, options = null) => res(message || RESPONSE_MESSAGES[200], options || 200);
export const res_400 = (message = null, options = null) => res(message || RESPONSE_MESSAGES[400], options || 400);
export const res_404 = (message = null, options = null) => res(message || RESPONSE_MESSAGES[404], options || 404);
export const res_429 = (message = null, options = null) => res(message || RESPONSE_MESSAGES[429], options || 429);

export const res = (input: any, options = {} as any ) => {
  const data = typeof input === "string" ? { message: input } : (input || {});
  return new Response(JSON.stringify({ ...data }, undefined, apiker.debug ? 4 : undefined), {
    headers: RESPONSE_HEADERS_DEFAULT,
    ...(Number.isInteger(options) ? { status: options } : options)
  });
};