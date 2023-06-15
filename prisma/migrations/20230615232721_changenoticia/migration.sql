/*
  Warnings:

  - The primary key for the `Noticia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `manchete` on the `Noticia` table. All the data in the column will be lost.
  - The `id` column on the `Noticia` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Noticia" DROP CONSTRAINT "Noticia_pkey",
DROP COLUMN "manchete",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Noticia_pkey" PRIMARY KEY ("id");
