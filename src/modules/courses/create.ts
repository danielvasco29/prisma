import { prisma } from "../../../prisma/PrismaClient"

    async function main() {
        const result = await prisma.courses.create({
            data: {
                name: "Curso de NodeJS",
                duration: 200,
                description: "Curso excelente de NodeJS",
                teacher: {
                    connectOrCreate: {
                        where: {
                            name: "Daniel Vasconcelos"
                        },
                        create: {
                            name: "Daniel Vasconcelos"
                        }
                    }
                    }
                }       
            })
            console.log(result)   
    }
            
    main()
