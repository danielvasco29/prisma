import { prisma } from "../../../prisma/PrismaClient";

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de Elixir",
            duration: 400,
            teacher: {
                create: {
                    name: "Zeca Paladium"
                }
            }           
        },
      
    })
    console.log(result)
}

main()