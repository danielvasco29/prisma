import { prisma } from "../../../prisma/PrismaClient"

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Teacher Master",
            duration: 199,
            fk_id_teacher: "8f6780d8-1b6e-4266-ad04-63613582cbc3"
        }
    })

    console.log(result)
}
main()