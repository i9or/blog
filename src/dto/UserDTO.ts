import { object, string, InferType } from "yup";

export const userDtoSchema = object({
  login: string()
    .required()
    .min(5)
    .matches(/^[a-zA-Z0-9_]+$/),
  password: string().required().min(8),
});

export interface UserDTO extends InferType<typeof userDtoSchema> {}
