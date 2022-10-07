import { prisma } from "../../../prisma/PrismaClient"


async function main() {
    const update = await prisma.courses.update({
        where: {
            name: "Curso de NodeJS5"
        },
        data: {
            duration: 400
        }
    })
    console.log(update)
}

main()