import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class CreateCustomerTable1628786455511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "customer",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "phone",
                        type: "varchar"
                    },
                    {
                        name: "createdAt",
                        type: 'timestamp',
                        default: "now()"
                    },
                ]
            })
        );

        await queryRunner.createIndex("customer", new TableIndex({
            name: "IDX_CUSTOMER_NAME",
            columnNames: ["name"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customer");
    }

}
