import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProjetoPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodos() {
		return this.prisma.projeto.findMany();
	}

	async obterDestaques() {
		return this.prisma.projeto.findMany({
			where: {
				destaque: true,
			},
		});
	}

	async obterPorId(id: number) {
		return this.prisma.projeto.findUnique({
			where: {
				id,
			},
			include: {
				tecnologias: true,
			},
		});
	}
}
