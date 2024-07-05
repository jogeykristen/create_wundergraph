import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates,
} from "@wundergraph/sdk";
import server from "./wundergraph.server";
import operations from "./wundergraph.operations";

// const countries = introspect.openApi({
//   apiNamespace: "countries",
//   url: "http://127.0.0.1:3000/api/v1/getUser/18",
//   method: "GET",
//   infer: true,
// });
// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  apis: [
    // {
    //   introspect: async () => ({
    //     api: {
    //       endpoint: "http://127.0.0.1:3000/api/v1/getUser/{id}",
    //       method: "GET",
    //     },
    //   }),
    // },
  ],
  server,
  operations,
  generate: {
    codeGenerators: [],
  },
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === "production"
        ? [
            // change this before deploying to production to the actual domain where you're deploying your app
            "http://localhost:3000",
          ]
        : [
            "http://localhost:3000",
            new EnvironmentVariable("WG_ALLOWED_ORIGIN"),
          ],
  },
  security: {
    enableGraphQLEndpoint:
      process.env.NODE_ENV !== "production" ||
      process.env.GITPOD_WORKSPACE_ID !== undefined,
  },
});
