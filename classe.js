class Volume{
    constructor(area,raio,altura){
        this.area = area
        this.altura = altura
        this.raio = raio
        
    }
    

    vPrisma(){
        return `O volume do prisma: ${(this.area * this.altura)}`
    }
    vPiramide(){
        return `O volume da Pirame: ${(this.area * this.altura) / (3)}`
    }
    vCilindro(){
        return `O volume do Cilindro: ${(3.14) * (this.raio * 2) * (this.altura)}`
    }
    vCone(){
        return `O volume do Cone: ${(this.raio * 2) * (this.altura) / (3)}`
    }
    vEsfera(){
        return `O volume da esfera: ${(4 * 3.14) * (this.raio * 3) / (3)}`
    }

    
}