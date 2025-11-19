import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

@Table({
  tableName: "jeans",
  timestamps: true,
})
export class JeanModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  brand!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  size!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  color!: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
  })
  description!: string;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(10,2),
  })
  price!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  stock!: number;

}