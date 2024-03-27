import dotenv from "dotenv";
dotenv.config();

const knexConfig = {
  client: "mysql2",
  connection: {
    host:
      process.env.DB_HOST ||
      "finances-db.c1wksqssaltq.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "finance_aws",
  },
};

export default knexConfig;
