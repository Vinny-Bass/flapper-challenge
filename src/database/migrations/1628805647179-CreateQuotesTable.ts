import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuotesTable1628805647179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "quotes",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "customerID",
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: "originCity",
                        type: "varchar"
                    },
                    {
                        name: "destinyCity",
                        type: "varchar"
                    },
                    {
                        name: "weight",
                        type: "float"
                    },
                    {
                        name: "height",
                        type: "float"
                    },
                    {
                        name: "width",
                        type: "float"
                    },
                    {
                        name: "length",
                        type: "float"
                    },
                    {
                        name: "cubedWeight",
                        type: "float"
                    },
                    {
                        name: "createdAt",
                        type: 'timestamp',
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKCustomerID",
                        referencedTableName: "customer",
                        referencedColumnNames: ["id"],
                        columnNames: ["customerID"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("quotes");
    }

}
