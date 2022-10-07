import { prisma } from "../../../prisma/PrismaClient";

async function main() {
    // SELECT * FROM COURSES LIMIT 1
    const course = await prisma.courses.findMany({
    });
    console.log(course);
}
main()