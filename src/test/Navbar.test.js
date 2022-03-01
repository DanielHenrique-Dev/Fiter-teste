import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Navbar } from "../components/Navbar"

describe('Navbar', () => {

    it('Testando o component Navbar', () => {
        render(<Navbar />)

        expect(screen.getByRole('img')).toBeInTheDocument();
    })

})