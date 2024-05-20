const sequelize = require('../config/connection');
const { User, Benefit } = require('../models');

const userData = [
  {
    name: 'johndoe',
    password: 'password123',
  },
];

const benefitsData = [
  {
    name: 'Reduced Stress and Anxiety',
    description: "Deep breathing triggers the relaxation response in the body, reducing levels of stress hormones such as cortisol and promoting feelings of calmness and relaxation.",
  },
  {
    name: 'Lowered Blood Pressure',
    description: 'By activating the body\'s relaxation response...',
  },
  // Add more benefits as needed
];

const seedBenefit = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Benefit.bulkCreate(benefitsData);

  process.exit(0);
};

seedBenefit();
