import { AppDataSource } from "../../../data-source";
import { User } from "../../../entities/user.entity";
import { validateInput } from "./validation";
import { sendSMS } from "./twilioClient";
import { alphaNumericGenerator } from "./otpService";

export const userService = {
  createUser: async (input: any) => {
    const userRepository = AppDataSource.getRepository(User);
    const token = alphaNumericGenerator();
    console.log("token == ", token);

    // Validate the input
    await validateInput(input);

    // Create a new user instance
    const newUser = userRepository.create({
      first_name: input.first_name,
      middle_name: input.middle_name,
      last_name: input.last_name,
      email: input.email,
      mobile: input.mobile,
      status: "PENDING",
      is_citizen: input.is_citizen,
      nic_number: input.nic_number,
      passport_number: input.passport_number,
      token: token,
    });

    const user = await userRepository.save(newUser);
    console.log("user = ", user);
    console.log("new user == ", newUser);

    return user;
  },

  getAllUsers: async () => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    return users;
  },
};
