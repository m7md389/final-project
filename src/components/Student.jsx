
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/Student.css'

export default function Student() {
    const companies = ['All companies', 'Yad2', 'Facebook', 'Twitter', 'Intel']
    const statuses = ['All status', 'Accepted', 'waiting', 'Applied', 'no reply']
    const [company, setCompany] = React.useState('');

    const handleChange = (event) => {
        setCompany(event.target.value);
    };


    return (
        <div className='student-page-container'>


            <div className='filters-detail'>
                <div className='cont'>
                    <Box sx={{ minWidth: 120 }} className='box'>
                        <FormControl fullWidth>
                            <InputLabel id="companies">Companies</InputLabel>
                            <Select
                                labelId="select-companies"
                                id="select-companies"
                                value={companies}
                                label="companies"
                                onChange={handleChange}>

                                {companies.map((c, idx) => {
                                    return (
                                        <MenuItem value={c}>{c}</MenuItem>
                                    )
                                })}


                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120 }} >
                        <FormControl fullWidth>
                            <InputLabel id="statuses">Statuses</InputLabel>
                            <Select
                                labelId="select-statuses"
                                id="select-statuses"
                                value={statuses}
                                label="statuses"
                                onChange={handleChange}>

                                {statuses.map((s, idx) => {
                                    return (
                                        <MenuItem value={s}>{s}</MenuItem>
                                    )
                                })}


                            </Select>
                        </FormControl>
                    </Box>

                </div>

                <div className='right-box-details'>
                    <p>name : </p>
                    <p>cohort : </p>
                    <p>email : </p>
                    <p>city : </p>
                    <p>phone : </p>
                </div>
            </div>

            <div style={{ width: '80%', margin: '10px auto' }}> <hr /></div>

            <div className='jobs-title'>
                <div>job name</div>
                <div className='vLine'>company</div>
                <div className='vLine'>date</div>
                <div className='vLine'>last interview</div>
                <div className='vLine'>status</div>
            </div>

            <div className='rows'>

            </div>



        </div >
    );
}
