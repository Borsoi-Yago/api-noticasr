/*
  Warnings:

  - Added the required column `manchete` to the `Noticia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Noticia" ADD COLUMN     "manchete" TEXT NOT NULL;
