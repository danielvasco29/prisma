/*
  Warnings:

  - You are about to drop the `Teachers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Teachers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_id_teachers" TEXT NOT NULL,
    CONSTRAINT "courses_fk_id_teachers_fkey" FOREIGN KEY ("fk_id_teachers") REFERENCES "teachers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_courses" ("created_at", "description", "duration", "fk_id_teachers", "id", "name") SELECT "created_at", "description", "duration", "fk_id_teachers", "id", "name" FROM "courses";
DROP TABLE "courses";
ALTER TABLE "new_courses" RENAME TO "courses";
CREATE UNIQUE INDEX "courses_name_key" ON "courses"("name");
CREATE UNIQUE INDEX "courses_fk_id_teachers_key" ON "courses"("fk_id_teachers");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
