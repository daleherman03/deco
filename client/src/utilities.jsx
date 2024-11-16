import axios from 'axios';

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post('/api/contact/', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
