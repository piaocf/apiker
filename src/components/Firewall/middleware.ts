import { res_429 } from "../Response";
import { apiker } from "../Apiker";
import { rateLimitRequest } from "../RateLimit";
import { Middleware } from "../Request";
import { FIREWALL_RATELIMIT_PREFIX, FIREWALL_REQUESTS_MINUTE } from "./constants";
import { banIP } from "./Firewall";

export const firewallMiddleWare: Middleware = ({}, handlerFn, params) => {
    const ip = apiker.headers.get("CF-Connecting-IP") as string;
    const minuteInMs = 60000;
    
    return rateLimitRequest(
        FIREWALL_RATELIMIT_PREFIX,
        handlerFn,
        params,
        apiker.firewall?.limitRequestsPerMinute || FIREWALL_REQUESTS_MINUTE,
        minuteInMs, 
        async () => {
            await banIP(ip);
            return res_429();
        }
    );
}