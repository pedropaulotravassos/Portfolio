import { Controller, Get, Param } from "@nestjs/common";
import { ProjetoPrisma } from "./projeto.prisma";

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repo: ProjetoPrisma) {}

	@Get()
	async obterTodos() {
		return this.repo.obterTodos();
	}

	@Get("destaques")
	async obterDestaques() {
		return this.repo.obterDestaques();
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string) {
		return this.repo.obterPorId(Number(id));
	}
}
