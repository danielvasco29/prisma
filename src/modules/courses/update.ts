import { prisma } from "../../../prisma/PrismaClient"

async function main() {
    const update = await prisma.courses.updateMany({
        where: {
            name: "Curso de NodeJS6"
        },
        data: {
            duration: 360
        }
    })
    console.log(update)
}

main()