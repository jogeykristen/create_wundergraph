import { createOperation, z } from "../../generated/wundergraph.factory";
import { getService } from "../services/getService";
import { smsService } from "../services/smsService";

export default createOperation.mutation({
  input: z.object({
    token: z.string(),
  }),
  handler: async ({ input }) => {
    const user = await getService.getUser(input.token);
    const sms = await smsService(user);
    return user;
  },
});
