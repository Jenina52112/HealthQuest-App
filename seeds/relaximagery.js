const { RelaxGuidedImagery } = require('../models');

const guidedImageryData = [
    {
        benefits_id: 1,
        title: 'Stress Reduction',
        description: 'Guided imagery helps individuals enter a state of deep relaxation by guiding them through vivid mental imagery of calming and peaceful scenes. This relaxation response counteracts the bodys stress response, leading to reduced levels of stress hormones such as cortisol.',
    },
    {
        benefits_id: 2,
        title: 'Anxiety Management',
        description: 'Practicing guided imagery can help individuals manage symptoms of anxiety by promoting relaxation and reducing physiological arousal. The visualization of calming scenes or positive outcomes can shift focus away from anxious thoughts and promote a sense of calmness and control.',
    },
    {
        benefits_id: 3,
        title: 'Pain Management',
        description: 'Guided imagery can be used as a complementary therapy for managing chronic pain conditions such as migraines, arthritis, or fibromyalgia. By redirecting attention away from pain sensations and promoting relaxation, guided imagery may help reduce pain intensity and improve pain coping abilities.',
    },
    {
        benefits_id: 4,
        title: 'Enhanced Focus and Concentration',
        description: 'Engaging in guided imagery exercises can improve focus and concentration by training the mind to sustain attention on specific mental images or scenarios. This heightened focus can enhance cognitive performance and productivity in various tasks.',
    },
    {
        benefits_id: 5,
        title: 'Emotional Regulation',
        description: 'Guided imagery encourages individuals to explore and process emotions in a safe and supportive environment. Visualizing positive experiences or engaging in metaphorical journeys can help individuals gain insight into their emotions, develop coping strategies, and foster emotional resilience.',
    },
    {
        benefits_id: 6,
        title: 'Improved Sleep Quality',
        description: 'Guided imagery is often used as a relaxation technique before bedtime to promote deep relaxation and prepare the mind and body for sleep. Visualization of peaceful scenes or guided body scans can help individuals unwind and alleviate insomnia symptoms, leading to improved sleep quality.',
    },
    {
        benefits_id: 7,
        title: 'Mind-Body Connection',
        description: 'Guided imagery facilitates a deeper connection between mind and body by encouraging individuals to visualize and experience sensations in their bodies. This heightened body awareness can promote mindfulness, self-awareness, and a sense of holistic well-being.',
    },
    {
        benefits_id: 8,
        title: 'Enhanced Creativity and Problem-Solving',
        description: 'Engaging in guided imagery exercises can stimulate creative thinking and problem-solving abilities by encouraging individuals to explore imaginative and metaphorical scenarios. Visualizing alternative perspectives or solutions to challenges can foster innovation and creativity.',
    },
];

const seedBenefits = () => RelaxGuidedImagery.bulkCreate(guidedImageryData);

module.exports = seedBenefits;