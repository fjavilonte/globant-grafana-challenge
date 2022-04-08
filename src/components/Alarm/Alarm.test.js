import {render,screen, fireEvent, getByRole} from '@testing-library/react'    
import Alarm from './Alar'

/* test('It will check if alarm is paused or active', () => {

    render(<AlarmList/>)
    const status = screen.getAllByText(/Status/i)
    const statusElement = screen.getbyRole('button', {name: /pause/i})

    expect(status).toBeInTheDocument()
    expect(statusElement).toBeInTheDocument()
}) */

test('Should search the status', () => {
    render(<Alarm />
    )
    const status = screen.getByLabelText('Status')
    
    fireEvent.change(getByRole('Button'), { target: { paused: true } });

    screen.debug()
})