import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const userRepository = getRepository(User);

        const users = await userRepository.find();

        return res.json(users);
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const userRepository = getRepository(User);
        
        const user = await userRepository.findOne(id);

        return res.json(user);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { firstName, lastName, age } = req.body;

        const userRepository = getRepository(User);
        
        const user = userRepository.create({
            firstName,
            lastName,
            age,
        });

        await userRepository.save(user);

        return res.json(user);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;

        const userRepository = getRepository(User);
        
        const user = await userRepository.findOne(id);

        if (user) {
            user.firstName = firstName;
            user.lastName = lastName;
            user.age = age;

            await userRepository.save(user);

            return res.json(user);
        }

        return res.status(404).json({ 
            message: 'User not Found'
        });
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);
        
        if (!user) return res.status(404).json([]);

        await userRepository.delete(user.id);

        return res.json([]);
    }
}