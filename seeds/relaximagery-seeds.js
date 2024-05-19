const { RelaxGuidedImagery } = require('../models');

const guidedImageryData = [
    {
        id: 1,
        user_id: 1,
        relax_guided_imagery_name: 'Stress Reduction',
        relax_guided_imagery_description: 'Guided imagery helps individuals enter a state of deep relaxation by guiding them through vivid mental imagery of calming and peaceful scenes. This relaxation response counteracts the bodys stress response, leading to reduced levels of stress hormones such as cortisol.',
    },
    {
        id: 2,
        user_id: 1, 
        relax_guided_imagery_name: 'Anxiety Management',
        relax_guided_imagery_description: 'Practicing guided imagery can help individuals manage symptoms of anxiety by promoting relaxation and reducing physiological arousal. The visualization of calming scenes or positive outcomes can shift focus away from anxious thoughts and promote a sense of calmness and control.',
    },
    {
        id: 3,
        user_id: 1, 
        relax_guided_imagery_name: 'Pain Management',
        relax_guided_imagery_description: 'Guided imagery can be used as a complementary therapy for managing chronic pain conditions such as migraines, arthritis, or fibromyalgia. By redirecting attention away from pain sensations and promoting relaxation, guided imagery may help reduce pain intensity and improve pain coping abilities.',
    },
    {
        id: 4,
        user_id: 1,
        relax_guided_imagery_name: 'Enhanced Focus and Concentration',
        relax_guided_imagery_description: 'Engaging in guided imagery exercises can improve focus and concentration by training the mind to sustain attention on specific mental images or scenarios. This heightened focus can enhance cognitive performance and productivity in various tasks.',
    },
    {
        id: 5,
        user_id: 1,
        relax_guided_imagery_name: 'Emotional Regulation',
        relax_guided_imagery_description: 'Guided imagery encourages individuals to explore and process emotions in a safe and supportive environment. Visualizing positive experiences or engaging in metaphorical journeys can help individuals gain insight into their emotions, develop coping strategies, and foster emotional resilience.',
    },
    {
        id: 6,
        user_id: 1,
        relax_guided_imagery_name: 'Improved Sleep Quality',
        relax_guided_imagery_description: 'Guided imagery is often used as a relaxation technique before bedtime to promote deep relaxation and prepare the mind and body for sleep. Visualization of peaceful scenes or guided body scans can help individuals unwind and alleviate insomnia symptoms, leading to improved sleep quality.',
    },
    {
        id: 7,
        user_id: 1,
        relax_guided_imagery_name: 'Mind-Body Connection',
        relax_guided_imagery_description: 'Guided imagery facilitates a deeper connection between mind and body by encouraging individuals to visualize and experience sensations in their bodies. This heightened body awareness can promote mindfulness, self-awareness, and a sense of holistic well-being.',
    },
    {
        id: 8,
        user_id: 1,
        relax_guided_imagery_name: 'Enhanced Creativity and Problem-Solving',
        relax_guided_imagery_description: 'Engaging in guided imagery exercises can stimulate creative thinking and problem-solving abilities by encouraging individuals to explore imaginative and metaphorical scenarios. Visualizing alternative perspectives or solutions to challenges can foster innovation and creativity.',
    },
];

const seedBenefits = () => RelaxGuidedImagery.bulkCreate(guidedImageryData);

module.exports = seedBenefits;