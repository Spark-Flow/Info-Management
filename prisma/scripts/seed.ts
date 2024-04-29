// TODO: 
const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

const classesList = [
  "KINDER1",
  "KINDER2",
  "GRADE1",
  "GRADE2",
  "GRADE3",
  "GRADE4",
  "GRADE5",
  "GRADE6",
  "GRADE7",
  "GRADE8",
  "GRADE9",
  "GRADE10",
];

const subjectsList = [
  "Science",
  "Math",
  "English",
  "Filipino",
  "Araling Panlipunan",
  "Edukasyon sa Pagpapakatao",
  "Music",
  "Arts",
  "Physical Education",
  "Health",
  "Technology and Livelihood Education",
  "Computer",
  "Values Education",
  "Work Education",
  "Home Economics",
  "Agriculture",
  "Entrepreneurship",
  "Research",
  "Technical Vocational Livelihood",
];

// FIXME: When seeding there is a bit of caching issue with Prisma, and may throw a "Unique constraint failed" error. even when deleted
async function seedData() {
  try {
    await Promise.all(
      classesList.map(async (className) => {
        const existingClass = await db.classes.findUnique({
          where: {
            name: className,
          },
        });

        if (!existingClass) {
          await db.classes.createMany({
            data: {
              name: className,
            },
          });
          console.log(`Created class: ${className}`);
        }
      })
    );
    console.log("Class Seed Complete");

    await Promise.all(
      subjectsList.map(async (subjectName) => {
        // Check if the subject already exists
        const existingSubject = await db.subjects.findUnique({
          where: {
            name: subjectName,
          },
        });

        // If the subject doesn't exist, create it
        if (!existingSubject) {
          await db.subjects.createMany({
            data: {
              name: subjectName,
            },
          });
          console.log(`Created subject: ${subjectName}`);
        }
      })
    );
    console.log("Subject Seed Complete");

  } catch (error) {
    console.error(error);
  }
}

seedData();


