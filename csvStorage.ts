import { BaseHouseData } from '../../types/HouseData';

export async function saveCalculation(data: BaseHouseData): Promise<void> {
  try {
    const response = await fetch('/api/calculations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      throw new Error('Failed to save calculation');
    }
  } catch (error) {
    console.error('Error saving calculation:', error);
  }
}