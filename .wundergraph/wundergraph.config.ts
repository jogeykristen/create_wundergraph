import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates,
} from "@wundergraph/sdk";
import server from "./wundergraph.server";
import operations from "./wundergraph.operations";

configureWunderGraphApplication({
  apis: [],
  server,
  operations,
  generate: {
    codeGenerators: [],
  },
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === "production"
        ? ["http://localhost:3000"]
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
