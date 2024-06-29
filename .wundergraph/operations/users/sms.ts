import { createOperation, z } from "../../generated/wundergraph.factory";
import { smsService } from "../services/smsService";

const sms = createOperation.mutation({
  input: z.object({
    mobile: z.string().regex(/^(\+91\d{10}|\d{10})$/),
  }),
  handler: async ({ input }) => {
    const newUSer = await smsService(input);
    return newUSer;
  },
});
export default sms;
