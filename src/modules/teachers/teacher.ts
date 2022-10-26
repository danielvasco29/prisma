import { prisma } from "../../../prisma/PrismaClient";

async function main() {
    const teacher = await prisma.teachers.create({
        data: {
            name: "Daniel Vascaino3",
        }
    })
    console.log(teacher)
}

main()