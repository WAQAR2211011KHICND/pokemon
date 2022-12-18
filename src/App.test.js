import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe('Checking App Component', ()=>{

    it('Checking the rendering of Header, SideBar, Center Component', async () => {
        render(<App />);

        //assigned a testid to each Components (Header, Sidebar, Center)
        expect(await screen.findByTestId('Header'))
        .toBeInTheDocument();
        expect(await screen.findByTestId('Sidebar'))
        .toBeInTheDocument();
        expect(await screen.findByTestId('Center'))
        .toBeInTheDocument();
    });

    it('check the Click Event on cards of Pokemons',async()=>{
        render(<App/>);
        const PokemonCards = await screen.findByTestId('cardBtn1')
        fireEvent.click(PokemonCards);
        expect(await screen.findByTestId('Center1')).toHaveTextContent('#01');
    })
});

