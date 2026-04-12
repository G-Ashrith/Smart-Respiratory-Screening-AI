import { Info, AlertTriangle } from 'lucide-react';

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="font-bold text-center mb-8" style={{ fontSize: '2rem' }}>About the Project</h1>
      
      <div className="card mb-8">
        <h2 className="font-semibold mb-4 flex items-center gap-2" style={{ fontSize: '1.25rem' }}>
          <Info className="text-primary" />
          Project Overview
        </h2>
        <p className="text-muted mb-4">
          This respiratory disease screening application uses deep learning to analyze acoustic properties of human coughs. 
          By combining audio feature extraction algorithms with neural networks, it provides instantaneous insights to assist in preliminary respiratory assessments.
        </p>
        
        <h3 className="disease-section-title mb-2">How it works</h3>
        <p className="text-muted mb-4">
          The underlying AI model relies on two primary audio representations: <strong>Mel Spectrograms</strong> and <strong>MFCCs</strong> (Mel-Frequency Cepstral Coefficients). 
          These features capture essential frequency configurations and temporal structures inherent in the cough audio.
        </p>
        
        <h3 className="disease-section-title mb-2">Data Profile</h3>
        <p className="text-muted mb-0">
          The machine learning model was trained on a robust dataset of medically labeled cough recordings spanning various respiratory conditions like pneumonia, asthma, and COPD, to ensure generalized and reliable pattern recognition.
        </p>
      </div>

      <div className="card" style={{ backgroundColor: '#fffbeb', borderColor: '#fef08a', color: '#92400e' }}>
        <h2 className="font-semibold mb-2 flex items-center gap-2" style={{ fontSize: '1.25rem', color: '#b45309' }}>
          <AlertTriangle />
          Important Medical Disclaimer
        </h2>
        <p className="font-bold uppercase" style={{ letterSpacing: '0.05em' }}>
          This tool is for screening purposes only and not a medical diagnosis.
        </p>
        <p className="mt-2 text-sm opacity-90">
          Always consult with a qualified healthcare professional regarding any medical concerns or conditions. Do not disregard professional medical advice or delay in seeking it because of information provided by this application.
        </p>
      </div>
    </div>
  );
}
