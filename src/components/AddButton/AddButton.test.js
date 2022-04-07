import AddButton from './AddButton'
import {render} from '@testing-library/react'


//We are looking if the button is pressed
test('renders content', () => {
    const addbutton = {
        content: 'This is a test',
        important: true,
        options: {
             pressed: true}
    }

    const component = render(<AddButton addbutton={addbutton} />)
    
    expect(component.container).toHaveTextContent('')
    component.getByRole('menu')
})