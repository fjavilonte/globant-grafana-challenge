import Card from './Card'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {prettyDOM} from '@testing-library/dom'

describe('Card Component', () => {
    let component  
    
   it('Card Component', ()=>{
    beforeEach(() => {
        component = render(
            <Card >
                <div className="testDiv">testDivContent</div>
            </Card>
        )
        test('render its children', ()=>{
            component.getByText('testDivContent') 
        })
        test('render its children', ()=>{
            component.getByText('testDivContent') 
        })
       
    }

    )
   })

})