//bulk insert the seed data for MySQL
const { RelaxDeepBreathTable } = require("../models");

const userBenefitsdata = [
  {
    user_id: 1,
    relax_deep_breath_name: "Reduced Stress and Anxiety",
    relax_deep_breath_description:
      "Deep breathing triggers the relaxation response in the body, reducing levels of stress hormones such as cortisol and promoting feelings of calmness and relaxation.",
  },
  {
    user_id: 1,
    relax_deep_breath_name: "Lowered Blood Pressure",
    relax_deep_breath_description:
      "By activating the bodys relaxation response, deep breathing can help lower blood pressure and promote cardiovascular health.",
  },
  {
    user_id: 1,
    relax_deep_breath_name: "Improved Oxygenation",
    relax_deep_breath_description:
      " Deep breathing allows you to take in more oxygen, which is essential for optimal functioning of the body and brain. This can enhance energy levels and cognitive function.",
  },
  {
    user_id: 1,
    relax_deep_breath_name: "Enhanced Relaxation",
    relax_deep_breath_description:
      "Deep breathing can help you relax and unwind, making it a great way to de-stress and improve overall well-being.",
  },
  {
    user_id: 1,
    relax_deep_breath_name: "Stress Reduction",
    relax_deep_breath_description:
      "Deep breathing serves as a mindfulness practice, allowing you to focus on the present moment and detach from stressful thoughts and worries. This can help reduce symptoms of anxiety and depression.",
  },
  {
    user_id: 1,
    relax_deep_breath_name: "Improved Respiratory Function",
    relax_deep_breath_description:
      "Practicing deep breathing regularly can strengthen the diaphragm and improve lung capacity, leading to more efficient breathing patterns and better respiratory health.",
  },
];

const seedDeepBreathing = () =>
  RelaxDeepBreathTable.bulkCreate(userBenefitsdata);

module.exports = seedDeepBreathing;
