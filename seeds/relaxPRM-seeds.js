const { RelaxPRM } = require('../models');

const relaxPRMSeeds = [
    {
        
        user_id: 1,
        relax_PRM_name: 'Reduction in Muscle Tension',
        relax_PRM_description:'PMR involves systematically tensing and then relaxing different muscle groups in the body. This process helps release physical tension stored in muscles, promoting a sense of relaxation and ease.',
    },
    {
      
        user_id: 1,
        relax_PRM_name: 'Stress Reduction',
        relax_PRM_description: 'By releasing muscle tension and activating the bodys relaxation response, PMR can help reduce overall stress levels. Regular practice can teach individuals how to recognize and release tension in response to stressors.',
    },
    {
       
        user_id: 1,
        relax_PRM_name: 'Improved Sleep Quality',
        relax_PRM_description: 'PMR is often used as a relaxation technique before bedtime to help individuals unwind and prepare for sleep. By promoting relaxation and reducing physical tension, PMR can improve sleep quality and help alleviate insomnia.',
    },
    {
     
        user_id: 1,
        relax_PRM_name: 'Pain Management',
        relax_PRM_description: 'PMR can be an effective complementary therapy for managing chronic pain conditions such as fibromyalgia, tension headaches, and lower back pain. By promoting relaxation and reducing muscle tension, PMR may help alleviate pain symptoms.',
    },
    {
       
        user_id: 1,
        relax_PRM_name: 'Anxiety and Mood Improvement',
        relax_PRM_description: 'PMR can help individuals with anxiety disorders or mood disorders such as depression by promoting relaxation and reducing symptoms of physiological arousal. It can also improve mood by fostering a sense of calmness and well-being.',
    },
    {
     
        user_id: 1,
        relax_PRM_name: 'Enhanced Body Awareness',
        relax_PRM_description: 'Practicing PMR involves focusing attention on different muscle groups in the body. This increased awareness of bodily sensations can help individuals develop a greater connection between mind and body, leading to improved self-awareness and mindfulness.',
    },
    {
       
        user_id: 1,
        relax_PRM_name: 'Improved Stress Coping Skills',
        relax_PRM_description: 'Through regular practice, individuals can learn to recognize signs of muscle tension and stress in their bodies and develop effective relaxation techniques to manage these symptoms. This can enhance resilience and coping skills in dealing with daily stressors.',
    },
    {
    
        user_id: 1,
        relax_PRM_name: 'Promotion of Relaxation Response',
        relax_PRM_description: 'PMR activates the parasympathetic nervous system, also known as the "rest and digest" system, which counteracts the bodys stress response. This leads to physiological changes such as lowered heart rate, reduced blood pressure, and increased feelings of relaxation.',
    }
];

const seedRelaxPRMs = () => RelaxPRM.bulkCreate(relaxPRMSeeds);


module.exports = seedRelaxPRMs;