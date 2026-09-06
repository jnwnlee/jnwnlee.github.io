import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PublicationTable from './PublicationTable';
import PublicationItemData from '../../data/publication/publicationItems.json';

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

test( 'shows only selected publications in selected-only mode', () => {
    const selectedPublication = PublicationItemData.find( item => item.selected );
    const unselectedPublication = PublicationItemData.find( item => !item.selected );

    render( <PublicationTable selectedOnly/> );

    expect( screen.getByRole( 'heading', { name: 'Selected Publications' } ) ).toBeInTheDocument();
    expect( screen.getByText( selectedPublication.title ) ).toBeInTheDocument();
    expect( screen.queryByText( unselectedPublication.title ) ).not.toBeInTheDocument();
} );

test( 'defines an explicit selection value for every publication', () => {
    expect( PublicationItemData.every( item => typeof item.selected === 'boolean' ) ).toBe( true );
} );
