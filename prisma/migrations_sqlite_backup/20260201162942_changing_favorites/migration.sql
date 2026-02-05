-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Favorite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL DEFAULT '',
    "carId" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Favorite_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Favorite" ("carId", "createdAt", "id", "userId") SELECT "carId", "createdAt", "id", "userId" FROM "Favorite";
DROP TABLE "Favorite";
ALTER TABLE "new_Favorite" RENAME TO "Favorite";
CREATE INDEX "Favorite_userId_idx" ON "Favorite"("userId");
CREATE INDEX "Favorite_carId_idx" ON "Favorite"("carId");
CREATE UNIQUE INDEX "Favorite_userId_carId_key" ON "Favorite"("userId", "carId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
