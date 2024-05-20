const { RelaxPRM } = require('../models');

const relaxPRMSeeds = [
    {
        id: 1,
        title: 'Reduction in Muscle Tension',
        description:'PMR involves systematically tensing and then relaxing different muscle groups in the body. This process helps release physical tension stored in muscles, promoting a sense of relaxation and ease.',
    },
    {
        benefits_id: 2,
        title: 'Stress Reduction',
        description: 'By releasing muscle tension and activating the bodys relaxation response, PMR can help reduce overall stress levels. Regular practice can teach individuals how to recognize and release tension in response to stressors.',
    },
    {
        benefits_id: 3,
        title: 'Improved Sleep Quality',
        description: 'PMR is often used as a relaxation technique before bedtime to help individuals unwind and prepare for sleep. By promoting relaxation and reducing physical tension, PMR can improve sleep quality and help alleviate insomnia.',
    },
    {
        benefits_id: 4,
        title: 'Pain Management',
        description: 'PMR can be an effective complementary therapy for managing chronic pain conditions such as fibromyalgia, tension headaches, and lower back pain. By promoting relaxation and reducing muscle tension, PMR may help alleviate pain symptoms.',
    },
    {
        benefits_id: 5,
        title: 'Anxiety and Mood Improvement',
        description: 'PMR can help individuals with anxiety disorders or mood disorders such as depression by promoting relaxation and reducing symptoms of physiological arousal. It can also improve mood by fostering a sense of calmness and well-being.',
    },
    {
        benefits_id: 6,
        title: 'Enhanced Body Awareness',
        description: 'Practicing PMR involves focusing attention on different muscle groups in the body. This increased awareness of bodily sensations can help individuals develop a greater connection between mind and body, leading to improved self-awareness and mindfulness.',
    },
    {
        benefits_id: 7,
        title: 'Improved Stress Coping Skills',
        description: 'Through regular practice, individuals can learn to recognize signs of muscle tension and stress in their bodies and develop effective relaxation techniques to manage these symptoms. This can enhance resilience and coping skills in dealing with daily stressors.',
    },
    {
        benefits_id: 8,
        title: 'Promotion of Relaxation Response',
        description: 'PMR activates the parasympathetic nervous system, also known as the "rest and digest" system, which counteracts the bodys stress response. This leads to physiological changes such as lowered heart rate, reduced blood pressure, and increased feelings of relaxation.',
    }
];

const seedRelaxPRMs = () => RelaxPRM.bulkCreate(relaxPRMSeeds);


module.exports = seedRelaxPRMs;