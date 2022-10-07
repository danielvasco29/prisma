import { prisma } from "../../../prisma/PrismaClient";

async function main() {
        const course = await prisma.courses.create({
            data: {
                duration: 200,
                name: "Curso de NodeJS5",
                description: "Curso excelente de NodeJS"
            },
        });
        console.log(course)
    }

    main()
