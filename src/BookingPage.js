import React, {useState} from 'react';


const BookingForm = ({onSubmit}) => {
    const [fullName, setfullName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [noOfGuess, setnoOfGuess] = useState('');
    const [occassion, setOccassion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault ();
        onSubmit([fullName, date, time, noOfGuess, occassion]);
    }

    return(
        <form onSubmit={handleSubmit}>
             <label for='full-name'>
                Full Name: 
                <input type="text" id="full-name" value={fullName}  onChange={(e) => setfullName(e.target.value)} />
            </label>

            <div>
                <label>Choose Date
                <input type="date" id="booking-date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
            </div>

            <div>
                <label for="time">Select Time</label>
                <select id='time' value={time} onChange={(e) => setTime(e.target.value)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>

            <div>
                <label for="no_of_guess">No. of guess</label>
                <input type="number" id="no_of_guess" min={1} max={10} placeholder='1'
                 value={noOfGuess} onChange={(e) => setnoOfGuess(e.target.value)}/>
            </div>

            <div>
                <label for="occassion">Occassion</label>
                <select value={occassion} onChange={(e) => setOccassion(e.target.value)}>
                <option>Anniversary</option>
                <option>Convocation</option>
                <option>Birthday</option>
                <option>Others</option>
                </select>
            </div>

            <div>
                <button type='submit'> Make your Reservations</button>
            </div>
        </form>
    )
}

export default BookingForm