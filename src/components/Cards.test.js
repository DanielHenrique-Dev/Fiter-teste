import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Cards } from './Cards';

const info = {nome: 'Daniel', foto: '', cargo: 'Desenvolvedor Jr.', telefone: '999856897'}

describe('Cards', () => {

    it('O card está trazendo a informações', () => {
        render(<Cards card={info}/>)

        expect(screen.getByText('Daniel')).toBeInTheDocument();
        expect(screen.getByText('Desenvolvedor Jr.')).toBeInTheDocument();
    })

})