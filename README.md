 <div>
 <img alt="Apiker" src="https://user-images.githubusercontent.com/25509135/140666135-42a79ae3-8e0a-4b83-a3f8-c9593a85eea7.png">
</div>

<div>
  <blockquote>Create APIs using Durable Objects & Wrangler</blockquote>

 <a href="https://www.npmjs.com/package/apiker"><img src="https://badgen.net/npm/v/apiker?color=blue" alt="npm version"></a> <a href="https://github.com/hodgef/apiker"><img src="https://img.shields.io/github/last-commit/hodgef/apiker" alt="latest commit"></a></a>
</div>

> NOTE: In early development. Usage might change from one version to the next

## Features

- Config-based routing
- Auth (TBD)

## Install

```
npm install apiker --save-dev
```

## 🚀 Usage
#### api.js (Durable Object)

```js
import { apiker, handleRequest } from "apiker";
import MyController from "./controllers/MyController";

const handlers = {
  MyController
};

const routes = {
  "/users/:id/counter": "MyController.getUserCounter"
}

class API {
  constructor(state) {
    state.blockConcurrencyWhile(async () => {
      apiker.init({ routes, handlers, state });
    });
  }

  /**
   * Handle HTTP requests
   */
  fetch = handleRequest;
}

export default API;

```

#### MyController.js

```js
import { res } from "apiker";

class MyController {
  getUserCounter = async ({ state }) => {
    // Get counter
    const initialCount = (await state.storage.get("counter")) ?? 0;

    // Increase count
    const count = initialCount + 1;
    
    // Save new value
    await state.storage.put("counter", count);
    
    // Return response
    return res({ count });
  };
}

export default MyController;
```

#### \> GET example.com/users/test/counter

```
{"count":1}
{"count":2}
...
```

> Full example: https://github.com/hodgef/apiker-demo
