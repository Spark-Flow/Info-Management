const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

// TODO:
export const paymentFeeStructureSeed = async () => {
  try {
    const existingPaymentFeeStructure = await db.paymentFeeStructure.findFirst({
      where: {
        id: 1,
      },
    });

    if (!existingPaymentFeeStructure) {
      await db.paymentFeeStructure.create({
        data: {
          id: 1,
          tuition: 10000,
          miscellaneous: 5000,
          booksAndSupplies: 3000,
          computerFee: 2000,
          internetFee: 1000,
          others: 0,
        },
      });
      console.log(`Created payment fee structure`);
    }
  } catch (error) {
    console.error('Error creating payment fee structure:', error);
  } finally {
    await db.$disconnect();
  }
}