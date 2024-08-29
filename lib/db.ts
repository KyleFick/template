import sql from "mssql";

const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    server: process.env.DATABASE_SERVER,
    database: process.env.DATABASE_Name,
    options: {
        encrypt: true,
        enableArithAbort: true,
    },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (err) {
        console.error("Database connection failed:",err);
        throw err;
    }
}