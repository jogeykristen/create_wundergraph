import { configureWunderGraphServer } from "@wundergraph/sdk/server";
const dotenv = require("dotenv");
dotenv.config();
import "reflect-metadata";

export default configureWunderGraphServer(() => ({
  hooks: {
    queries: {
      Countries: {
        preResolve: async ({ operations }) => {},
      },
    },
    mutations: {},
  },
}));
