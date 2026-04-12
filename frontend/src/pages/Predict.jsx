import { useState, useRef } from 'react';
import axios from 'axios';
import { UploadCloud, FileAudio, Loader2, AlertCircle } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Predict() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      if (selectedFile.type.startsWith('audio/') || selectedFile.name.match(/\.(wav|mp3|flac|ogg|m4a)$/i)) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError('Please upload an audio file (.wav, .mp3, .flac, .ogg, .m4a)');
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    setIsLoading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'An error occurred during prediction.');
    } finally {
      setIsLoading(false);
    }
  };

  const getDiseaseColor = (label) => {
    if (!label) return '#64748b';
    const key = label.toLowerCase();
    if (key.includes('bronch')) return '#f59e0b'; // Amber
    if (key.includes('pneumonia')) return '#ef4444'; // Red
    if (key.includes('asthma')) return '#8b5cf6'; // Purple
    if (key.includes('copd')) return '#06b6d4'; // Cyan
    if (key.includes('health')) return '#10b981'; // Emerald
    return '#3b82f6'; // fallback blue
  };

  const capitalize = (str) => {
    if (!str) return '';
    return str.replace(/\b\w/g, l => l.toUpperCase());
  };

  // Chart configuration
  const chartData = result ? {
    labels: Object.keys(result.probs).map(capitalize),
    datasets: [{
      data: Object.values(result.probs),
      backgroundColor: Object.keys(result.probs).map(getDiseaseColor),
      borderWidth: 0,
    }]
  } : null;

  const chartOptions = {
    plugins: {
      legend: { position: 'right' }
    },
    cutout: '70%',
    maintainAspectRatio: false
  };

  const maxConfidence = result ? Math.max(...Object.values(result.probs)) * 100 : 0;

  return (
    <div className="flex flex-col gap-8">
      {/* SECTION A: AUDIO UPLOAD */}
      <section>
        <h2 className="font-bold mb-4" style={{ fontSize: '1.5rem' }}>1. Upload Audio</h2>
        <div className="card">
          <div 
            className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              ref={fileInputRef}
              type="file" 
              accept="audio/*,.wav,.mp3,.flac,.ogg,.m4a"
              onChange={handleChange}
              className="file-input"
            />
            {file ? (
              <div className="flex flex-col items-center">
                <FileAudio size={48} className="upload-icon" />
                <p className="font-semibold">{file.name}</p>
                <p className="text-muted mb-4 text-sm mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <button 
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubmit();
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <><Loader2 className="animate-spin" style={{ marginRight: '0.5rem' }} size={20} /> Analyzing...</>
                  ) : (
                    'Analyze Audio'
                  )}
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <UploadCloud size={48} className="upload-icon" />
                <p className="font-semibold mb-2">Drag and drop your audio file here</p>
                <p className="text-muted mb-4">or click to browse</p>
                <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>Select File</button>
              </div>
            )}
          </div>
          
          {error && (
            <div className="mt-4 p-4 flex items-center gap-2" style={{ backgroundColor: '#fef2f2', color: '#dc2626', borderRadius: 'var(--radius-md)' }}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}
        </div>
      </section>

      {result && (
        <>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* SECTION B: PREDICTION RESULT */}
            <section style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="font-bold mb-4" style={{ fontSize: '1.5rem' }}>2. Prediction Result</h2>
              <div className="card result-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="text-muted font-semibold uppercase mb-2" style={{ letterSpacing: '0.1em' }}>Detected Condition</p>
                <h3 className="result-label" style={{ color: getDiseaseColor(result.pred_label) }}>
                  {capitalize(result.pred_label)}
                </h3>
                <div>
                  <span className="confidence-badge" style={{ backgroundColor: getDiseaseColor(result.pred_label) }}>
                    {maxConfidence.toFixed(1)}% Confidence
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION C: CLASS SCORES */}
            <section style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="font-bold mb-4" style={{ fontSize: '1.5rem' }}>3. Class Scores</h2>
              <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: '250px', position: 'relative', width: '100%' }}>
                  <Doughnut data={chartData} options={chartOptions} />
                </div>
              </div>
            </section>
          </div>

          {/* SECTION D: EXPLAINABLE AI */}
          <section>
            <h2 className="font-bold mb-4" style={{ fontSize: '1.5rem' }}>4. Explainable AI</h2>
            <div className="card">
              <img 
                src={result.explainability_panel} 
                alt="Model explainability heatmaps" 
                className="explainability-img"
              />
              <p className="text-center text-muted mt-4 text-sm">
                Heatmaps show which parts of the audio influenced the model.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
