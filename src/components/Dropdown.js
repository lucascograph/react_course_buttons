import { useState } from "react"


function Dropdown({ options, onSelect}) {

    const [ showOptions, setShowOptions ] = useState(false)
    const [ selected, setSelected ] = useState("")

    const handleDropdownClick = () => {
        setShowOptions(prev => !prev)
    }

    const handleSelect = (selectedOption) => {
        setShowOptions(false)
        setSelected(selectedOption.label)
        onSelect(selectedOption)
    }

    const renderedOptions = options.map((option, index) => {
        return (
            <li onClick={handleSelect}>
                {option.label}
            </li>
        )
    })

    return (
        <ul>
            <div onClick={handleDropdownClick}>
                {selected ? selected : "Select.."}
            </div>
            {showOptions ? renderedOptions : ""}
        </ul>
    )
}

export default Dropdown