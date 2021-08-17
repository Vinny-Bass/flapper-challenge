import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { hash } from 'bcrypt';

export class CreateUsersTable1629205653831 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    }
                ]
            })
        );

        const passHash = await hash('123456', 8);

        await queryRunner.query(`INSERT INTO users (email, password) VALUES ('teste@teste.com', '${passHash}')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
