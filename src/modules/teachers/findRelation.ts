import { prisma } from "../../../prisma/PrismaClient";

async function main() {
    const teacher = await prisma.courses.findMany({
        include: {teacher: true}
    });

    console.log(teacher)
}

main()