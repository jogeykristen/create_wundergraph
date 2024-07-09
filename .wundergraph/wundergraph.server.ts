import { configureWunderGraphServer } from "@wundergraph/sdk/server";
import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates,
} from "@wundergraph/sdk";
const dotenv = require("dotenv");
dotenv.config();
import "reflect-metadata";
import { CustomError } from "./operations/errors/customErrors";

export default configureWunderGraphServer(() => ({
  hooks: {
    queries: {},
    mutations: {},
  },
}));
