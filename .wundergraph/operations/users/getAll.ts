import { createOperation } from "../../generated/wundergraph.factory";
import { userService } from "../services/userService";

const getAllUsersQuery = createOperation.query({
  handler: async () => {
    const users = await userService.getAllUsers();
    return users;
  },
});

export default getAllUsersQuery;
