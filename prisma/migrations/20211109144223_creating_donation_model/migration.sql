-- CreateTable
CREATE TABLE "donation" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "donation_pkey" PRIMARY KEY ("id")
);
