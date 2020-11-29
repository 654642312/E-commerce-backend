import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
	const usersFound = await getRepository(User).find();
	return res.status(200).json({ msg: usersFound });
};
