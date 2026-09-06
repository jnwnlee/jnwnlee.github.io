import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PublicationTable from './PublicationTable';

jest.mock( 'isotope-layout', () => jest.fn().mockImplementation( () => ( {
    arrange: jest.fn(),
    layout: jest.fn()
} ) ) );

test( 'shows publication details by default and lets visitors hide them', () => {
    render( <PublicationTable /> );

    const detailsToggle = screen.getByRole( 'button', { name: /hide details/i } );

    expect( detailsToggle ).toHaveAttribute( 'aria-pressed', 'true' );
    expect( document.querySelector( '.publicationTable-details' ) ).toBeInTheDocument();

    fireEvent.click( detailsToggle );

    expect( screen.getByRole( 'button', { name: /show details/i } ) ).toHaveAttribute( 'aria-pressed', 'false' );
    expect( document.querySelector( '.publicationTable-details' ) ).not.toBeInTheDocument();
} );
