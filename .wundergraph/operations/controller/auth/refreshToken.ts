import { createOperation, z } from "../../../generated/wundergraph.factory";
import { customerService } from "../../services/auth/register";

const createUserMutation = createOperation.query({
  input: z.object({
    refreshToken: z.string(),
  }),
  handler: async ({ input }) => {
    return await customerService.refreshToken(input.refreshToken);
  },
});
