export class User {
    private readonly id: number
    private readonly nome: string;
    private readonly senha: string;

    public get Nome() : string {
        return this.nome;
    }
    
    public get Senha() : string {
        return this.senha;
    }

    
    public get Id() : number {
        return this.id;
    }
    
    
    constructor({nome, senha, id}: {nome: string, senha: string, id: number}){
        this.nome = nome;
        this.senha = senha;
        this.id = id;
    }
}
