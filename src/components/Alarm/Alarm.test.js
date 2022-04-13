import {render,screen, fireEvent, getByRole} from '@testing-library/react'    
import Alarm from './Alarm'

/* test('It will check if alarm is paused or active', () => {

    render(<AlarmList/>)
    const status = screen.getAllByText(/Status/i)
    const statusElement = screen.getbyRole('button', {name: /pause/i})

    expect(status).toBeInTheDocument()
    expect(statusElement).toBeInTheDocument()
}) */


test("The button's text shows properly", ()=> {
    const {getByTestId} = render(<Alarm />)
    const buttonEl = getByTestId("isActive")

    expect(buttonEl.textContent).toBe("Pause" || "Resume" || "Firing")
    
})

test("The button's text shows properly", ()=> {
    const {getByTestId} = render(<Alarm />)
    const buttonEl = getByTestId("editbutton")

    expect(buttonEl.textContent).toBe("Edit")
    
})

test("The button's text shows properly", ()=> {
    const {getByTestId} = render(<Alarm />)
    const buttonEl = getByTestId("editbutton")

    expect(buttonEl.textContent).toBe("Edit")
    
})
test("The button's text shows properly", ()=> {
    const {getByTestId} = render(<Alarm />)
    const buttonEl = getByTestId("deletebutton")

    expect(buttonEl.textContent).toBe("Delete")
    
})


test("The button's text shows properly", ()=> {
    const {getByTestId} = render(<Alarm />)
    const buttonEl = getByTestId("isActive")

    fireEvent.change(buttonEl,{
        target: {
            value: "Resume"
        }
    });

    expect(buttonEl.value).toBe("Resume")
    
})