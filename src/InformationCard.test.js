import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InformationCard from './InformationCard';
import { updateStarredStatus } from './actions/api';

const mockCompany = {
  id: 1,
  name: 'Example Company',
  starred: false,
  description: 'A sample company description',
  address: {
    street: '123 Street',
    city: 'Example City',
    country: 'Example Country'
  },
  image: 'example.jpg'
};

describe('InformationCard', () => {
  it('renders company name and description correctly', () => {
    render(<InformationCard {...mockCompany} />);

    const companyNameElement = screen.getByText('Example Company');
    const descriptionElement = screen.getByText('A sample company description');

    expect(companyNameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders star button with correct label based on starred prop', () => {
    render(<InformationCard {...mockCompany} />);

    const starButtonElement = screen.getByRole("star-button");
    expect(starButtonElement).toBeInTheDocument();
  });

  it('fires an onClick callback if star button is clicked', () => {
    const updatedStarredMock = jest.fn()
    render(<InformationCard {...mockCompany} updateStarred={updatedStarredMock} />);

    const starButtonElement = screen.getByRole("star-button");
    fireEvent.click(starButtonElement)
    expect(updatedStarredMock).toHaveBeenCalled()
  });

  it('renders image for an image URL', () => {
    render(<InformationCard {...mockCompany} />);

    const imageElement = screen.getByAltText('Example Company');
    expect(imageElement).toBeInTheDocument();
  });

  it('renders placeholder for no image URL', () => {
    const companyWithoutImage = { ...mockCompany, image: '' };
    render(<InformationCard {...companyWithoutImage} />);

    const placeholderElement = screen.getByTestId('img-placeholder');
    expect(placeholderElement).toBeInTheDocument();
  });
});