import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Formik from '../pages/Formik';

describe('Formik Component', () => {
  test('renders form with input fields', () => {
    render(<Formik />);
    
    // Test that the form renders with all input fields
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Age')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByText('submit')).toBeInTheDocument();
  });

  test('submits the form with valid input', () => {
    render(<Formik />);

    // Mock an alert to prevent it from actually showing
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Fill in the form with valid input
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Age'), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'StrongPass123!' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'StrongPass123!' } });

    // Submit the form
    fireEvent.click(screen.getByText('submit'));

    // Check that the form submitted successfully (alert was called)
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('John'));
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Doe'));
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('john.doe@example.com'));
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('25'));
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('StrongPass123!'));
  });
});