import swaggerAutogen from "swagger-autogen";
const doc = {
    info: {
        title: "Devathon Inscription API",
        description: "Devathon inscription backend API",
    },
    host: "localhost:3000",
    definitions: {
        developer: {
            fullname: "Pedro Plasencia",
            email: "pedro@pedro.com",
            github_link: "github.com",
            linkedin_link: "linkedin.com",
            idrole: 1,
            ceremony_available: 1,
            discord_username: "pedro",
            idseniority: 1,
            looking_for_work: 0,
            retire_probability: 1,
            condition_accepted: 1,
            idteam: 1,
            status: 1,
            created_by: "01-01-2024",
        },
    },
};

const outputFile = "./docs/swagger-output.json";
swaggerAutogen()(outputFile, ["./src/routes/index.ts"], doc);
