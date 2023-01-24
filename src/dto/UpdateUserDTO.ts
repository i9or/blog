import { InferType, object, string } from "yup";
import { userDtoSchema } from "~/dto/UserDTO";

export const updateUserDtoSchema = userDtoSchema.shape({
  newPassword: string().required().min(8),
});
