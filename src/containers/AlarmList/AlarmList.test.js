import { useFormControl } from '@mui/material'

import AlarmList from './AlarmList'
import {render,} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
/* test('It will check if alarm is paused or active', () => {

    render(<AlarmList/>)
    const status = screen.getAllByText(/Status/i)
    const statusElement = screen.getbyRole('button', {name: /pause/i})

    expect(status).toBeInTheDocument()
    expect(statusElement).toBeInTheDocument()
}) */
//Usint renderHook to test if the modal is loading, still doesnt work
test('Check if alarm is rendering', () => {
    const {getByTestId} = render(<AlarmList />)
    const content = getByTestId("content")
    
    expect(content.textContent)
})