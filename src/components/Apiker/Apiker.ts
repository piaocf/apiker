import { getAdminRoutes } from "../Admin";
import { getApikerAuthRoutes } from "../Auth";
import { OBMT } from "../ObjectBase";
import ObjectBase from "../ObjectBase/ObjectBase";
import { handleEntryRequest, handleScheduledRequest, RequestParams } from "../Request";
import type { Controllers, EmailOptions, Firewall, ObjectStateMapping, Options, Routes, Timings } from "./interfaces";
import { ResponseParams } from "./utils";

/**
 * Apiker class definition.
 * ⚠️ Please do not instantiate this class and use the "apiker" exported instance instead.
 */
export class Apiker {
  name = "Apiker";
  routes: Routes = {};
  controllers: Controllers = {};
  debug = false;
  objectVersion = "V1";
  objects!: string[];
  objectStateMapping!: ObjectStateMapping;
  authRoutes!: boolean;
  env: any;
  ctx: any;
  requestParams!: RequestParams;
  responseParams = new ResponseParams();
  responseHeaders!: Headers;
  firewall!: Firewall | boolean;
  adminPanel!: boolean;
  email?: EmailOptions;
  timings: Timings = {};

  defaultObjectName = "Common";

  /**
   * Initialize Apiker, perform basic validation
   */
  init = (options: Options = {}) => {
    try {
      /**
       * Extract options
       */
      const {
        routes,
        controllers = {} as Controllers,
        objects,
        exports,
        firewall,
        adminPanel = false,
        authRoutes = false,
        name = "Apiker",
        email,
        debug,
        scheduled,
      } = options;

      /**
       * Apply defaults to objectStateMapping
       */
      const objectStateMapping = {
        CounterUser: OBMT.SIGNEDIP,
        RateLimit: OBMT.SIGNEDIP,
        Logs: OBMT.SIGNEDIP,
        Bans: "userId",
        ...(options.objectStateMapping || {})
      };

      /**
       * Check for required params
       */
      if(!(routes && objects && exports)){
        throw new Error("Missing required parameters, please consult the Apiker documentation");
      }

      /**
       * Assign options
       */
      this.setProps({ routes, controllers, objects, authRoutes, adminPanel, firewall, name, email, debug, objectStateMapping });

      /**
       * If authRoutes option is set to true, set auth routes
       */
      if(authRoutes){
        this.routes = {
          ...getApikerAuthRoutes(),
          ...this.routes
        };
      }

      /**
       * If adminPanel option is set to true, set admin panel routes
       */
      if(adminPanel){
        this.routes = {
          ...getAdminRoutes(),
          ...this.routes
        };
      }

      /**
       * Prepare worker exports
       */
      const workerExports = {
        handlers: {
          fetch: handleEntryRequest,
          scheduled: scheduled ?
            (event: any, env: any, ctx: any) => handleScheduledRequest(event, env, ctx, scheduled) : undefined,
        }
      };

      /**
       * Adding named objects to exports
       */
      this.objects.forEach((objectName: string) => {
        workerExports[objectName] = this.getObjectClassDefinition(objectName);
      });

      Object.assign(exports, workerExports);
    } catch (e: any) {
      return new Response(e.message);
    }
  };

  /**
   * Set options
   */
   setProps = (options: Options = {}) => {
     Object.assign(this, options);
   }

  /**
   * Creates a durable object class definition
   */
  getObjectClassDefinition = (objectName: string) => {
    return ({[objectName] : class extends ObjectBase {}})[objectName];
  }
}

/**
 * Instance of the Apiker class
 */
const apiker = new Apiker();
export { apiker };
