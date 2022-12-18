import { render, screen } from "@testing-library/react"
import Header from "./Header";

describe("Testing Header Component",()=>{

    it("Should have a left Logo" ,async ()=>{
        render(<Header/>);    
        expect(await screen.findByTestId('leftLogo')).toBeInTheDocument();
    })

    it("Should have a Image at Center", async ()=>{
        render(<Header/>);
        expect(await screen.findByTestId('mainLogo')).toBeInTheDocument();

    })

    it("Should have a Image at Right", async ()=>{
        render(<Header/>);
        expect(await screen.findByTestId('rightLogo')).toBeInTheDocument();
    })

})