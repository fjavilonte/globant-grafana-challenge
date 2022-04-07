import Alarm from './Alarm'
import {render} from '@testing-library/react'

test('renders content', () => {
    const alarm = {
        content: 'This is a test',
        important: true,
        options: {
            pressed: true}
   }
   const component = render(<Alarm alarm={alarm} />)
    
   expect(component.container).toHaveTextContent('%ActiveEditDeletePause')
   
    }

   
)