import { render ,screen ,fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
//text
test('should render defaule value of counter' , ()=>{
    //1-render component
    render(<Counter/>)
    //2-select element
    const counterText = screen.getByText('10')
    //3-expect 
    expect(counterText).toBeInTheDocument();
});
//incrementButton
test('should render increment Button' , ()=>{
    //render component
    render(<Counter/>);
    //2-select element
    const incrementButton = screen.getByRole("button",{name:"Increment"});
    //3-expect 
    expect(incrementButton).toBeInTheDocument();
    expect(incrementButton).toBeEnabled()
})
test('when we click increment Button value should be increased' , ()=>{
    //render component
    render(<Counter/>);
    //2-select element
    const counterText = screen.getByText('10')
    //3-expect
    expect(counterText).toBeInTheDocument();
    //simulate event
    const incrementButton = screen.getByRole("button",{name:"Increment"});
    fireEvent.click(incrementButton)
   //expect 
   expect(counterText).toHaveTextContent('11')
})

//decrementButton
test('should render decrement Button' , ()=>{
    //render component
    render(<Counter/>);
    //2-select element
    const decrementButton = screen.getByRole("button",{name:"Decrement"});
    //3-expect 
    expect(decrementButton).toBeInTheDocument();
    expect(decrementButton).toBeEnabled()
})
test('when we click increment Button value should be decreaced' , ()=>{
    //render component
    render(<Counter/>);
    //2-select element
    const counterText = screen.getByText('10')
    //3-expect
    expect(counterText).toBeInTheDocument();
    //simulate event
    const decrementButton = screen.getByRole("button",{name:"Decrement"});
    fireEvent.click(decrementButton)
   //expect 
   expect(counterText).toHaveTextContent('9')
})