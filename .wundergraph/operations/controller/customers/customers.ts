import { createOperation, z } from "../../../generated/wundergraph.factory";
import { customerService } from "../../services/customer/customer";

const createUserMutation = createOperation.query({
  input: z.object({
    id: z.string().regex(/^\d+$/),
  }),
  handler: async ({ input }) => {
    const user = await customerService.getUserById(input.id);
    return user;
  },
});
