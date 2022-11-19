-- CreateTable
CREATE TABLE "Pokemons" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nature" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);
