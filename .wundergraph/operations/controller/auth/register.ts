import { createOperation, z } from "../../../generated/wundergraph.factory";
import { customerService } from "../../services/auth/register";
import { smsService } from "../../services/auth/smsService";

const createUserMutation = createOperation.mutation({
  input: z.object({
    first_name: z.string(),
    middle_name: z.string().optional(),
    last_name: z.string(),
    email: z.string(),
    mobile: z.string(),
    is_citizen: z.string(),
    nic_number: z.string().optional(),
    passport_number: z.string().optional(),
  }),
  handler: async ({ input }) => {
    try {
      const newUser = await customerService.createUser(input);
      console.log("newUser = ", newUser);
      const otp = await smsService(input);

      return newUser;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
});

export default createUserMutation;
