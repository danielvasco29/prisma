import { prisma } from "../../../prisma/PrismaClient"

    async function main() {
        const result = await prisma.courses.create({
            data: {
                name: "Curso de NodeJS11",
                duration: 200,
                description: "Curso excelente de NodeJS",
                teacher: {
                    connect: {                       
                            id: "6a34955b-db57-4411-9049-5467faace7ac"
                        }
                    }
                }       
            })
            console.log(result)   
    }
            
    main()
