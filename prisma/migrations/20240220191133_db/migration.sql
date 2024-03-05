-- CreateTable
CREATE TABLE "Bait" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Bait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trophy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "weight" DOUBLE PRECISION,
    "lenght" DOUBLE PRECISION,
    "bait_id" INTEGER NOT NULL,

    CONSTRAINT "Trophy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trophy" ADD CONSTRAINT "Trophy_bait_id_fkey" FOREIGN KEY ("bait_id") REFERENCES "Bait"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
