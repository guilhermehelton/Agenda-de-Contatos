import React, { useState } from 'react'
import  useDebounce  from '../hooks/useDebounce'
import './SearchBar.css'

export default function SearchBar({ value, onChange }){
    const [displayValue, setDisplayValue] = useState(value)
    const debouncedChange = useDebounce(onChange, 500)

    const handleChange = (event) => {
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value)
    }

    return <input type="text" placeholder='Buscar Contato' className='search-bar' value={displayValue}
        onChange={handleChange}/>
}