const { RelaxDeepBreath } = require('../models');

const userBenefitsdata = [
{
    benefits_id: 1,
    title: 'Reduced Stress and Anxiety',
    description: 'Deep breathing triggers the relaxation response in the body, reducing levels of stress hormones such as cortisol and promoting feelings of calmness and relaxation.',
},
{
    benefits_id: 2,
    title: 'Lowered Blood Pressure',
    description: 'By activating the bodys relaxation response, deep breathing can help lower blood pressure and promote cardiovascular health.',
},
{
    benefits_id: 3,
    title: 'Improved Oxygenation',
    description: ' Deep breathing allows you to take in more oxygen, which is essential for optimal functioning of the body and brain. This can enhance energy levels and cognitive function.',
},
{
    benefits_id: 4,
    title: 'Enhanced Relaxation',
    description: 'Deep breathing can help you relax and unwind, making it a great way to de-stress and improve overall well-being.',
},
{
    benefits_id: 5,
    title: 'Stress Reduction',
    description: 'Deep breathing serves as a mindfulness practice, allowing you to focus on the present moment and detach from stressful thoughts and worries. This can help reduce symptoms of anxiety and depression.',
},
{
    benefits_id: 6,
    title: 'Improved Respiratory Function',
    description: 'Practicing deep breathing regularly can strengthen the diaphragm and improve lung capacity, leading to more efficient breathing patterns and better respiratory health.',
}

];

const seedDeepBreathing = () => RelaxDeepBreath.bulkCreate(userBenefitsdata);

module.exports = seedDeepBreathing;