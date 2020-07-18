import React from 'react'

const SelectCountry = () => {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="World">World</option>
            {data.Countries.map(i => (<option key={i.Country} value={i.Country}>{i.Country}</option>))}
        </select>
    )
}

export default SelectCountry
