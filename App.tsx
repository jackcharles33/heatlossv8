import React from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import { PredictionForm } from './components/PredictionForm';
import { ResultsDisplay } from './components/results/ResultsDisplay';
import { DatabaseViewer } from './components/DatabaseViewer';
import { HeatLossPredictor } from './utils/predictor';
import { HouseData } from './types/HouseData';

const predictor = new HeatLossPredictor();

function App() {
  const [prediction, setPrediction] = React.useState<number | null>(null);
  const [currentInput, setCurrentInput] = React.useState<Partial<HouseData> | null>(null);

  const handlePredict = (input: Partial<HouseData>) => {
    try {
      const result = predictor.predict(input);
      setPrediction(result);
      setCurrentInput(input);
      return result;
    } catch (err) {
      console.error('Error making prediction:', err);
      return 0;
    }
  };

  const handleKrakenValidation = (krakenValue: number) => {
    if (prediction && currentInput) {
      predictor.validatePrediction(currentInput, prediction, krakenValue);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '2.5rem',
            mb: 2
          }}
        >
          Heat Loss Calculator
        </Typography>
        <Typography 
          variant="h6" 
          component="h2"
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 400,
            mb: 4
          }}
        >
          Predict a customer's heat loss - Qualifying Tool
        </Typography>
      </Box>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={3}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: 3
            }}
          >
            <PredictionForm onPredict={handlePredict} />
          </Paper>
        </Grid>
        
        {prediction !== null && (
          <Grid item xs={12} md={8}>
            <ResultsDisplay 
              prediction={prediction} 
              onKrakenValidation={handleKrakenValidation}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <DatabaseViewer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;