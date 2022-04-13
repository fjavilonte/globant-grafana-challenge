import React from 'react'
import Badge from './Badge'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Badge renders with text", ()=> {
    const {getByTestId} = render(<Badge />)
    const headerEl = getByTestId("counter")

    expect(headerEl.textContent)
    
})

test("Counter starts with some text value", () => {
    const{getByTestId} = render(<Badge />)
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent)
})




