import { useState } from 'react';

export const useHome = () => {
  const initialFormState = {
    nombre: '',
    correo: '',
    tipoUsuario: 'persona_natural',
    categoria: 'declaracion_renta',
    tituloPropuesta: '',
    descripcion: '',
    impactoEstimado: 'alto'
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: '', message: '' });

    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.descripcion.trim()) {
      setFeedback({
        type: 'danger',
        message: 'Por favor complete todos los campos obligatorios (*).'
      });
      setIsSubmitting(false);
      return;
    }

    // Simulación de latencia de red contra microservicio
    setTimeout(() => {
      try {
        const storedIdeas = JSON.parse(localStorage.getItem('fintech_propuestas') || '[]');
        storedIdeas.push({
          ...formData,
          id: Date.now(),
          fecha: new Date().toISOString()
        });
        localStorage.setItem('fintech_propuestas', JSON.stringify(storedIdeas));

        setFeedback({
          type: 'success',
          message: 'Propuesta registrada exitosamente en el buzón técnico.'
        });
        setFormData(initialFormState);
      } catch (err) {
        setFeedback({
          type: 'danger',
          message: 'Error local al guardar la información.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 800);
  };

  return {
    formData,
    isSubmitting,
    feedback,
    handleChange,
    handleSubmit
  };
};