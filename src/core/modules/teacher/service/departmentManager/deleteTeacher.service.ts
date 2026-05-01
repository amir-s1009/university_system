import { Response } from "../../../../response.js";

export type DeleteTeacherService = ({
  id,
  userId,
}: {
  userId: string;
  id: string;
}) => Response;
