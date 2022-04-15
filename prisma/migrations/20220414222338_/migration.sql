-- CreateTable
CREATE TABLE "ProductReminder" (
    "id" TEXT NOT NULL,
    "initialPrice" INTEGER NOT NULL,
    "userId" TEXT,
    "productId" TEXT,

    CONSTRAINT "ProductReminder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductReminder_id_key" ON "ProductReminder"("id");

-- AddForeignKey
ALTER TABLE "ProductReminder" ADD CONSTRAINT "ProductReminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReminder" ADD CONSTRAINT "ProductReminder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
