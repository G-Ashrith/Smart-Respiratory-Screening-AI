import React, { useState } from 'react';
import { Activity, Thermometer, Wind, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

import bronchialImg from '../../images/bronchitis.jpeg';
import pneumoniaImg from '../../images/pneumonia.jpeg';
import asthmaImg from '../../images/asthama.jpeg';
import copdImg from '../../images/copd.jpeg';
import healthyImg from '../../images/healthy.jpeg';

export default function DiseasesInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const diseases = [
    {
      id: 'bronchial',
      name: 'Bronchial Conditions',
      colorCode: 'var(--color-bronchial)',
      icon: <Activity color="white" size={48} />,
      image: bronchialImg,
      desc: 'Inflammation of the lining of your bronchial tubes, which carry air to and from your lungs. It can be acute (usually caused by viruses) or chronic, often accompanied by persistent coughing and mucus production.',
      causes: [
        'Viral or bacterial respiratory infections',
        'Tobacco smoke (primary or secondhand)',
        'Air pollution and dust',
        'Occupational exposure to fumes'
      ],
      effects: [
        'Persistent coughing with mucus',
        'Difficulty breathing (dyspnea)',
        'Fatigue and weakness',
        'Development of chronic bronchitis if prolonged'
      ],
      symptoms: [
        'Frequent coughing',
        'Production of mucus (phlegm)',
        'Fatigue and slight fever',
        'Chest discomfort'
      ],
      prevention: [
        'Avoid smoking and secondhand smoke',
        'Wash hands frequently to avoid viral infections',
        'Wear a mask in dusty environments',
        'Get annual flu vaccinations'
      ]
    },
    {
      id: 'pneumonia',
      name: 'Pneumonia',
      colorCode: 'var(--color-pneumonia)',
      icon: <Thermometer color="white" size={48} />,
      image: pneumoniaImg,
      desc: 'An infection that causes the air sacs (alveoli) in one or both lungs to inflame and fill with fluid or pus, triggering a cough with phlegm, fever, chills, and severe difficulty breathing.',
      causes: [
        'Bacterial infections (e.g., Streptococcus pneumoniae)',
        'Viral infections (including flu and COVID-19)',
        'Fungal infections',
        'Aspiration of food, liquid, or vomit'
      ],
      effects: [
        'Severe difficulty breathing leading to oxygen deprivation',
        'Bacteria entering the bloodstream (bacteremia)',
        'Fluid accumulation around lungs (pleural effusion)',
        'Organ failure in high-risk severe cases'
      ],
      symptoms: [
        'Cough with phlegm or pus',
        'Fever, chills, and difficulty breathing',
        'Chest pain when breathing or coughing',
        'Confusion or changes in mental awareness (in adults >65)'
      ],
      prevention: [
        'Get vaccinated (e.g., flu, pneumococcal)',
        'Practice good hygiene',
        'Keep your immune system strong',
        'Don\'t smoke'
      ]
    },
    {
      id: 'asthma',
      name: 'Asthma',
      colorCode: 'var(--color-asthma)',
      icon: <Wind color="white" size={48} />,
      image: asthmaImg,
      desc: 'A chronic condition in which your airways narrow, swell, and produce extra mucus. This makes breathing extremely difficult and can trigger severe coughing attacks and wheezing.',
      causes: [
        'Interplay of genetic and environmental factors',
        'Airborne allergens (pollen, dust mites, pet dander)',
        'Respiratory infections or physical activity',
        'Cold air, smoke, or strong emotional stress'
      ],
      effects: [
        'Severe interference with sleep and daily activities',
        'Long-term narrowing of the bronchial tubes',
        'Life-threatening asthma attacks',
        'Decreased overall physical capability'
      ],
      symptoms: [
        'Shortness of breath',
        'Chest tightness or pain',
        'Wheezing when exhaling',
        'Coughing attacks worsened by viruses'
      ],
      prevention: [
        'Identify and avoid known asthma triggers',
        'Take prescribed controller medications regularly',
        'Monitor your breathing patterns',
        'Get vaccinated for influenza and pneumonia'
      ]
    },
    {
      id: 'copd',
      name: 'COPD',
      colorCode: 'var(--color-copd)',
      icon: <Wind color="white" size={48} />,
      image: copdImg,
      desc: 'Chronic Obstructive Pulmonary Disease involves chronic inflammatory lung diseases—like emphysema and chronic bronchitis—that cause obstructed airflow from the lungs.',
      causes: [
        'Long-term exposure to tobacco smoke',
        'Prolonged exposure to chemical fumes, vapors, or dusts',
        'Alpha-1-antitrypsin deficiency (rare genetic cause)',
        'History of childhood respiratory infections'
      ],
      effects: [
        'Progressive, irreversible decline in lung capacity',
        'Increased risk of heart disease and lung cancer',
        'High blood pressure in lung arteries (pulmonary hypertension)',
        'Frequent and severe respiratory infections'
      ],
      symptoms: [
        'Shortness of breath, especially during activities',
        'Wheezing and chest tightness',
        'Chronic cough with mucus (smoker\'s cough)',
        'Lack of energy and unexplained weight loss'
      ],
      prevention: [
        'Quit smoking and avoid secondhand smoke immediately',
        'Avoid occupational exposure to fumes and dust',
        'Annual flu and pneumococcal vaccinations',
        'Engage in pulmonary rehabilitation programs'
      ]
    },
    {
      id: 'healthy',
      name: 'Healthy',
      colorCode: 'var(--color-healthy)',
      icon: <CheckCircle color="white" size={48} />,
      image: healthyImg,
      desc: 'Indicative of clear respiratory function with no significant signs of audio or clinical abnormalities, representing optimal lung and airway health.',
      causes: [
        'Active and healthy lifestyle choices',
        'Avoidance of smoking and environmental pollutants',
        'Strong and well-maintained immune system',
        'Routine healthcare and cardiovascular fitness'
      ],
      effects: [
        'Optimal oxygen exchange throughout all body systems',
        'High energy levels, stamina, and cognitive function',
        'Ability to perform physical activities easily',
        'Lower risk of systemic and chronic cardiovascular diseases'
      ],
      symptoms: [
        'Clear, regular, and effortless breathing',
        'Absence of chronic cough or wheezing',
        'Good exercise tolerance and endurance',
        'Normal blood oxygen levels'
      ],
      prevention: [
        'Maintain regular cardiovascular exercise',
        'Eat a balanced, healthy diet rich in antioxidants',
        'Regular medical check-ups and respiratory screenings',
        'Practice daily deep breathing exercises'
      ]
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % diseases.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + diseases.length) % diseases.length);
  };

  const currentDisease = diseases[currentIndex];

  const ListCard = ({ title, items, color }) => (
    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600',
        marginBottom: '1rem', 
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginTop: 0
      }}>
        <span style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: color, display: 'inline-block' }}></span>
        {title}
      </h3>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ 
            marginBottom: '0.75rem', 
            fontSize: '1rem', 
            color: 'rgba(255,255,255,0.85)',
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '0.75rem',
            lineHeight: '1.4'
          }}>
            <span style={{ color: color, marginTop: '0.2rem' }}>•</span> 
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginTop: '-3rem',
      marginBottom: '-4rem',
      minHeight: 'calc(100vh - 4rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      color: '#fff',
      padding: '2rem'
    }}>
      {/* Background Image Wrapper for animation */}
      {diseases.map((disease, idx) => (
        <div
          key={disease.id}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `url(${disease.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out',
            zIndex: -2
          }}
        />
      ))}
      
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)', /* Slate-900 with opacity */
        zIndex: -1
      }}></div>

      {/* Prev Button */}
      <button 
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '2rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: 'white',
          padding: '1rem',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Previous Disease"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Next Button */}
      <button 
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '2rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: 'white',
          padding: '1rem',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Next Disease"
      >
        <ChevronRight size={32} />
      </button>

      {/* Content Container */}
      <div 
        key={currentDisease.id} // Re-mounts to trigger fade animation
        style={{
          maxWidth: '1000px',
          width: '100%',
          textAlign: 'center',
          padding: '2.5rem',
          borderRadius: '1.5rem',
          background: 'rgba(15, 23, 42, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          animation: 'fadeIn 0.6s ease-out',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '85vh'
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            background: currentDisease.colorCode,
            borderRadius: '50%',
            marginBottom: '1rem',
            boxShadow: `0 10px 15px -3px rgba(0,0,0,0.3)`
          }}>
            {currentDisease.icon}
          </div>

          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            marginBottom: '1rem', 
            color: currentDisease.colorCode,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            letterSpacing: '-0.02em',
            marginTop: 0
          }}>
            {currentDisease.name}
          </h2>
          
          <p style={{ 
            fontSize: '1.15rem', 
            marginBottom: '2rem', 
            lineHeight: '1.6', 
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '800px',
            margin: '0 auto 2rem auto'
          }}>
            {currentDisease.desc}
          </p>
        </div>

        {/* Scrollable Data Container */}
        <div 
          className="disease-data-scroll"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem', 
            textAlign: 'left',
            overflowY: 'auto',
            paddingRight: '0.5rem',
            flexGrow: 1
          }}
        >
          <ListCard title="Causes & Triggers" items={currentDisease.causes} color="#fbbf24" />
          <ListCard title="Common Symptoms" items={currentDisease.symptoms} color="#f87171" />
          <ListCard title="Effects & Complications" items={currentDisease.effects} color="#c084fc" />
          <ListCard title="Prevention Tips" items={currentDisease.prevention} color="#4ade80" />
        </div>
      </div>

      {/* Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        display: 'flex',
        gap: '0.75rem',
        zIndex: 10
      }}>
        {diseases.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: i === currentIndex ? '2.5rem' : '0.75rem',
              height: '0.75rem',
              borderRadius: '999px',
              border: 'none',
              background: i === currentIndex ? diseases[i].colorCode : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Custom Scrollbar for disease data container */
        .disease-data-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .disease-data-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05); 
          border-radius: 4px;
        }
        .disease-data-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2); 
          border-radius: 4px;
        }
        .disease-data-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4); 
        }
      `}</style>
    </div>
  );
}
