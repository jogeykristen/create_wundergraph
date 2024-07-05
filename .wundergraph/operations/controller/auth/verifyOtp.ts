import { createOperation, z } from "../../../generated/wundergraph.factory";
import { customerService } from "../../services/auth/register";

const createUserMutation = createOperation.mutation({
  input: z.object({
    otp: z.string(),
  }),
  handler: async ({ input }) => {
    return await customerService.refreshToken(input.otp);
  },
});
