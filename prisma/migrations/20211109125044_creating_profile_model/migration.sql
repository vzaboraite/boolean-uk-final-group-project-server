-- CreateTable
CREATE TABLE "profile" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);
