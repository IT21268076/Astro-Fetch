import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from '../components/Section';

describe('Section Component', () => {
  test('renders title, eyebrow, and lead content correctly', () => {
    const eyebrowContent = 'Eyebrow Content';
    const titleContent = 'Section Title';
    const leadContent = 'Lead Content';

    render(
      <Section title={titleContent}>
        <div slot="eyebrow">{eyebrowContent}</div>
        <div slot="lead">{leadContent}</div>
      </Section>
    );

    // Ensure that the title is rendered
    expect(screen.getByText(titleContent)).toBeInTheDocument();

    // Ensure that the eyebrow content is rendered
    expect(screen.getByText(eyebrowContent)).toBeInTheDocument();

    // Ensure that the lead content is rendered
    expect(screen.getByText(leadContent)).toBeInTheDocument();
  });

  test('renders title and lead content correctly without eyebrow', () => {
    const titleContent = 'Section Title';
    const leadContent = 'Lead Content';

    render(
      <Section title={titleContent}>
        <div slot="lead">{leadContent}</div>
      </Section>
    );

    // Ensure that the title is rendered
    expect(screen.getByText(titleContent)).toBeInTheDocument();

    // Ensure that the lead content is rendered
    expect(screen.getByText(leadContent)).toBeInTheDocument();
  });
});
