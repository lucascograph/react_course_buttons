import Dropdown from "./components/Dropdown"

function App() {

    const options = [
       { label: "red", value:"red" },
       { label: "blue", value:"blue" },
       { label: "green", value:"green" },
    ]

    const handleSelect = (selectedOption) => {
        console.log(selectedOption)
    }


    return (
        <Dropdown options={options} onSelect={handleSelect} />
    )
}

export default App
