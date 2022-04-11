import { useFormControl } from '@mui/material'
import {render,screen, fireEvent, getByRole, act} from '@testing-library/react'    
import isLoading from './AlarmList'

/* test('It will check if alarm is paused or active', () => {

    render(<AlarmList/>)
    const status = screen.getAllByText(/Status/i)
    const statusElement = screen.getbyRole('button', {name: /pause/i})

    expect(status).toBeInTheDocument()
    expect(statusElement).toBeInTheDocument()
}) */
//Usint renderHook to test if the modal is loading, still doesnt work
test('Should search the status', () => {
   
    const status = renderHook(()=> isLoading())
    act(()=>{
        status.true
    })
    expect(status).toBe(true)
})