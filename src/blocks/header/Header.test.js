import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test( 'links to About, Publication, and Blog while the logo links home', () => {
    render(
        <MemoryRouter initialEntries={ ['/about'] }>
            <Header/>
        </MemoryRouter>
    );

    const aboutLink = screen.getByRole( 'link', { name: 'About' } );
    const publicationLink = screen.getByRole( 'link', { name: 'Publication' } );

    expect( screen.getByTitle( 'Home' ) ).toHaveAttribute( 'href', '/' );
    expect( aboutLink ).toHaveAttribute( 'href', '/about' );
    expect( publicationLink ).toHaveAttribute( 'href', '/publications' );
    expect( screen.getByRole( 'link', { name: 'Blog' } ) ).toHaveAttribute( 'href', '/blog' );
    expect( aboutLink ).toHaveAttribute( 'aria-current', 'page' );

    expect( aboutLink ).toHaveClass( 'transform-scale-h' );
    expect( publicationLink ).toHaveClass( 'transform-scale-h' );
} );
