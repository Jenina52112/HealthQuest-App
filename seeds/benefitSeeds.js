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
    description: 'By activating the bodys relaxation response, deep breathing can help lower blood pressure and promote cardiovascular health.',
  },
  {
    name: 'Improved Oxygenation',
    description: ' Deep breathing allows you to take in more oxygen, which is essential for optimal functioning of the body and brain. This can enhance energy levels and cognitive function.',
  },
  {
    name: 'Enhanced Relaxation',
    description: 'Deep breathing can help you relax and unwind, making it a great way to de-stress and improve overall well-being.',
  },
  {
    name: 'Stress Reduction',
    description: 'Deep breathing serves as a mindfulness practice, allowing you to focus on the present moment and detach from stressful thoughts and worries. This can help reduce symptoms of anxiety and depression.',
  },
  {
    name: 'Improved Respiratory Function',
    description: 'Practicing deep breathing regularly can strengthen the diaphragm and improve lung capacity, leading to more efficient breathing patterns and better respiratory health.',
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
