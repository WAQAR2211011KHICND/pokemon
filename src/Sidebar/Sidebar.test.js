import { render, screen } from "@testing-library/react"
import mockData from "../mock/mockedData";
import Poke from "./Poke";
import SideBar from './Sidebar';
import NoteState from '../Api/Context/NoteState'

require('jest-fetch-mock').enableMocks();

beforeEach(()=>{
  fetchMock.resetMocks();
})


// Testing Poke Component with Mocked testing
describe("Testing Poke Component",()=>{
    
    it("Checking the id, name, type of Poke Component", async ()=>{
        jest.spyOn(global, "fetch").mockImplementation(() =>
          Promise.resolve({
            json: () => Promise.resolve( mockData[0] )
          })
        );        
        render(<Poke pokemon={{url : 'https://pokeapi.co/api/v2/pokemon/1/'}}/>);    
        expect(await screen.findByText('#025')).toBeInTheDocument();
        expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
        expect(await screen.findByText(/type: electric/i)).toBeInTheDocument();
        const pikachuImage = await screen.findByAltText("pikachu");
        expect(pikachuImage).toHaveAttribute('src', mockData[0].sprites.other.dream_world.front_default);   
         
        fetchMock.resetMocks();
        fetchMock.disableMocks();
    })
})

// Testing SideBar Component with out Mocked api testing

describe("Testing SideBar Component", ()=>{
  
  it("Should have 2 Pokemens at sidebar when fetching Data", async ()=>{
    
    render(<NoteState><SideBar/></NoteState>);

    const pokemonsCards = await screen.findAllByText(/#0.*/);
    expect(pokemonsCards).toHaveLength(10);
   })

})