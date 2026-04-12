import { Link } from 'react-router-dom';
import { Stethoscope, Mic, Activity, ArrowRight } from 'lucide-react';
import bgImage from '../../images/ai-healthcare background image.jpg';

export default function Home() {
  return (
    <div 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.90)), url("${bgImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        margin: '-3rem calc(50% - 50vw) -4rem calc(50% - 50vw)',
        padding: '6rem 2rem',
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <div 
        style={{
          maxWidth: '800px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div 
          style={{ 
            backgroundColor: 'rgba(37, 99, 235, 0.15)', 
            padding: '1.25rem', 
            borderRadius: '50%', 
            marginBottom: '2rem',
            border: '1px solid rgba(59, 130, 246, 0.5)',
            boxShadow: '0 0 30px rgba(37, 99, 235, 0.4)'
          }}
        >
          <Stethoscope size={56} style={{ color: '#60a5fa' }} />
        </div>
        
        <h1 
          className="hero-title" 
          style={{ 
            color: '#f8fafc',
            fontSize: '3.5rem',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}
        >
          AI-Powered <span style={{ color: '#60a5fa' }}>Respiratory</span><br />
          Health Screening
        </h1>
        
        <p 
          className="hero-desc" 
          style={{ 
            color: '#cbd5e1', 
            fontSize: '1.25rem',
            maxWidth: '650px',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            margin: '0 auto 2.5rem auto'
          }}
        >
          A fast, secure, and intuitive AI tool designed to analyze cough recordings and predict potential respiratory conditions instantly with explainable insights.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link 
            to="/predict" 
            className="btn btn-primary" 
            style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.125rem', 
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.6)',
              border: '1px solid var(--primary)'
            }}
          >
            <Mic size={20} />
            Start Audio Screening
            <ArrowRight size={18} />
          </Link>
          <Link 
            to="/diseases" 
            className="btn" 
            style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.125rem', 
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#f8fafc',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <Activity size={20} />
            View Disease Info
          </Link>
        </div>
      </div>
    </div>
  );
}
