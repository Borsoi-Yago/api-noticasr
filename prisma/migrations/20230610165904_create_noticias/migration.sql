-- CreateTable
CREATE TABLE "Noticia" (
    "id" TEXT NOT NULL,
    "manchete" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "lide" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Noticia_pkey" PRIMARY KEY ("id")
);
