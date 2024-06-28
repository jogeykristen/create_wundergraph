// import { createOperation, z } from "../../generated/wundergraph.factory";
// import { AppDataSource } from "../../../data-source";
// import { User } from "../../../entities/user.entity";

// export default createOperation.mutation({
//   input: z.object({
//     first_name: z.string(),
//     middle_name: z.string().optional(),
//     last_name: z.string(),
//     email: z.string().email(),
//     mobile: z.string(),
//     status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
//     is_citizen: z.boolean(),
//     nic_number: z.string().optional(),
//     passport_number: z.string().optional(),
//   }),
//   handler: async ({ input }) => {
//     const userRepository = AppDataSource.getRepository(User);

//     // Create a new user instance
//     const newUser = userRepository.create({
//       first_name: input.first_name,
//       middle_name: input.middle_name,
//       last_name: input.last_name,
//       email: input.email,
//       mobile: input.mobile,
//       status: input.status,
//       is_citizen: input.is_citizen,
//       nic_number: input.nic_number,
//       passport_number: input.passport_number,
//     });

//     // Save the new user to the database
//     await userRepository.save(newUser);

//     return newUser;
//   },
// });

import { createOperation, z } from "../../generated/wundergraph.factory";
//import { validateInput } from "../services/validation";
import { userService } from "../services/userService";

const createUserMutation = createOperation.mutation({
  input: z.object({
    first_name: z.string(),
    middle_name: z.string().optional(),
    last_name: z.string(),
    email: z.string().email(),
    mobile: z.string().regex(/^(\+91\d{10}|\d{10})$/),
    status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
    is_citizen: z.boolean(),
    nic_number: z.string().optional(),
    passport_number: z.string().optional(),
  }),
  handler: async ({ input }) => {
    const newUser = await userService.createUser(input);

    return newUser;
  },
});

export default createUserMutation;
