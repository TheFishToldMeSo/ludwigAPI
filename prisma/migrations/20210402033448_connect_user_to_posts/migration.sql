/*
  Warnings:

  - Added the required column `accountsUser_id` to the `words` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "words" ADD COLUMN     "accountsUser_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "words" ADD FOREIGN KEY ("accountsUser_id") REFERENCES "accounts"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
