'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Form field interface
interface FormField {
  value: string;
  error: string;
}

// Form state interface
interface FormState {
  name: FormField;
  address: FormField;
  phone: FormField;
  email: FormField;
  comment: FormField;
}

const VolunteerForm: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState<FormState>({
    name: { value: '', error: '' },
    address: { value: '', error: '' },
    phone: { value: '', error: '' },
    email: { value: '', error: '' },
    comment: { value: '', error: '' },
  });

  // Loading, success, and form validity states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Check initial form validity on component mount
  React.useEffect(() => {
    // Check if all required fields are valid
    const requiredFieldsValid = 
      formState.name.value.trim() !== '' && formState.name.error === '' &&
      formState.address.value.trim() !== '' && formState.address.error === '' &&
      formState.phone.value.trim() !== '' && formState.phone.error === '' &&
      formState.email.value.trim() !== '' && formState.email.error === '';
    
    setIsFormValid(requiredFieldsValid);
  }, [formState]); // Re-check whenever form state changes

  // Handle input changes and validate in real-time
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update form state
    const updatedState = {
      ...formState,
      [name]: { value, error: '' }
    };
    
    // Basic field validation
    let error = '';
    
    if (name === 'name' && !value.trim()) {
      error = 'Name is required';
    } else if (name === 'address' && !value.trim()) {
      error = 'Address is required';
    } else if (name === 'phone') {
      if (!value.trim()) {
        error = 'Phone number is required';
      } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
        error = 'Please enter a valid 10-digit phone number';
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Please enter a valid email address';
      }
    }
    
    // Set the error if any
    if (name === 'name' || name === 'address' || name === 'phone' || name === 'email' || name === 'comment') {
      updatedState[name].error = error;
    }
    
    // Update form state
    setFormState(updatedState);
    
    // Check if all required fields are valid
    const requiredFieldsValid = 
      updatedState.name.value.trim() !== '' && updatedState.name.error === '' &&
      updatedState.address.value.trim() !== '' && updatedState.address.error === '' &&
      updatedState.phone.value.trim() !== '' && updatedState.phone.error === '' &&
      updatedState.email.value.trim() !== '' && updatedState.email.error === '';
    
    setIsFormValid(requiredFieldsValid);
  };

  // Validate form
  const validateForm = (): boolean => {
    let isValid = true;
    const newFormState = { ...formState };

    // Validate name
    if (!formState.name.value.trim()) {
      newFormState.name.error = 'Name is required';
      isValid = false;
    }

    // Validate address
    if (!formState.address.value.trim()) {
      newFormState.address.error = 'Address is required';
      isValid = false;
    }

    // Validate phone
    if (!formState.phone.value.trim()) {
      newFormState.phone.error = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formState.phone.value.replace(/\D/g, ''))) {
      newFormState.phone.error = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    // Validate email
    if (!formState.email.value.trim()) {
      newFormState.email.error = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email.value)) {
      newFormState.email.error = 'Please enter a valid email address';
      isValid = false;
    }

    setFormState(newFormState);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formState.name.value,
      from_email: formState.email.value,
      from_address: formState.address.value,
      from_phone: formState.phone.value,
      message: formState.comment.value,
    };

    try {
      // Send email using EmailJS
      // You'll need to replace these IDs with your actual EmailJS service, template, and user IDs
      await emailjs.send(
        'service_c3resqj',
        'template_f03jlf8',
        templateParams,
        'pq1blvYkBNCBaYVQO'
      );

      // Reset form on success
      setFormState({
        name: { value: '', error: '' },
        address: { value: '', error: '' },
        phone: { value: '', error: '' },
        email: { value: '', error: '' },
        comment: { value: '', error: '' },
      });
      
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000); // Hide success message after 5 seconds
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="volunteer-form-container" style={{ width: '100%' }}>
        <h2 className="volunteer-form-heading" style={{ textAlign: 'left' }}>Join Our Campaign</h2>
      <p className="volunteer-form-subheading" style={{ textAlign: 'left' }}>
        Volunteer with us to make a difference in Newburgh
      </p>

      {submitSuccess && (
        <div className="volunteer-form-success">
          Thank you for your interest! We will be in touch soon.
        </div>
      )}

      {submitError && (
        <div className="volunteer-form-error">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="volunteer-form" style={{ width: '100%', maxWidth: '100%' }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name.value}
            onChange={handleChange}
            className={`form-input ${formState.name.error ? 'error' : ''}`}
            placeholder="Your full name"
          />
          {formState.name.error && <span className="form-error">{formState.name.error}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Address*</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formState.address.value}
            onChange={handleChange}
            className={`form-input ${formState.address.error ? 'error' : ''}`}
            placeholder="Your address"
          />
          {formState.address.error && <span className="form-error">{formState.address.error}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone.value}
            onChange={handleChange}
            className={`form-input ${formState.phone.error ? 'error' : ''}`}
            placeholder="Your phone number"
          />
          {formState.phone.error && <span className="form-error">{formState.phone.error}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email.value}
            onChange={handleChange}
            className={`form-input ${formState.email.error ? 'error' : ''}`}
            placeholder="Your email address"
          />
          {formState.email.error && <span className="form-error">{formState.email.error}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="comment" className="form-label">Comments</label>
          <textarea
            id="comment"
            name="comment"
            value={formState.comment.value}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Share your thoughts or how you'd like to help"
            rows={4}
          />
        </div>

        <div style={{ width: '100%', display: 'block', margin: '16px 0 0 0', padding: 0 }}>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting || !isFormValid}
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '16px',
              fontWeight: 600,
              backgroundColor: isFormValid ? '#DB2777' : '#cccccc',
              color: '#ffffff',
              border: 'none',
              borderRadius: '100px',
              cursor: isFormValid ? 'pointer' : 'not-allowed',
              opacity: isFormValid ? 1 : 0.7,
              display: 'block',
              boxSizing: 'border-box'
            }}
          >
            {isSubmitting ? 'Submitting...' : isFormValid ? 'Join Now' : 'Complete Required Fields'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
