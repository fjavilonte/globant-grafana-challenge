
import AlarmList from './AlarmList'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

/* test('It will check if alarm is paused or active', () => {

    render(<AlarmList/>)
    const status = screen.getAllByText(/Status/i)
    const statusElement = screen.getbyRole('button', {name: /pause/i})

    expect(status).toBeInTheDocument()
    expect(statusElement).toBeInTheDocument()
}) */

test('Check if alarm is rendering', () => {
    
    render(<AlarmList />)
    const inputElement = screen.getByText(/alarm/i);
    userEvent.type(inputElement, "Alarm 1")
    expect(inputElement.value).toBe("Alarm 1")
})