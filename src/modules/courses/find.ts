import { prisma } from "../../../prisma/PrismaClient";

async function main() {
    // SELECT * FROM COURSES LIMIT 1 usando o findFirst
    // SELECT * FROM COURSES ORDER BY ID DESC usando findFirst({ take: -1 })
    const course = await prisma.courses.findMany({
    });
    console.log(course);
}
main()