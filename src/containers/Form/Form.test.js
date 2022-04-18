import {render,screen, fireEvent, getByRole} from '@testing-library/react'   
import Form from './Form'


test("input starts empty" , () => {

    render(<Form />)
    const inputElement = screen.getByText( {
        name: /alarm/i,
    })
    expect(inputElement.value).toBe("Alarm 1")
})