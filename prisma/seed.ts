import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.role.createMany({
        data: [
            {
                name: "Frontend",
                created_by: "Pedro Plasencia",
            },
            {
                name: "Backend",
                created_by: "Pedro Plasencia",
            },
        ],
    });
    await prisma.seniority.createMany({
        data: [
            {
                name: "Trainee",
                created_by: "Pedro Plasencia",
            },
            {
                name: "Junior",
                created_by: "Pedro Plasencia",
            },
            {
                name: "Semi-senior",
                created_by: "Pedro Plasencia",
            },
            {
                name: "Senior",
                created_by: "Pedro Plasencia",
            },
        ],
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
