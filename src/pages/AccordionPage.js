import Accordion from "../components/Accordion"

function AccordionPage() {

    const items = [
        {
            id: "j3i2",
            label: "This is the 1st label",
            content: "this is the longer text content that gives information"
        },
        {
            id: "dsf3",
            label: "This is the 2st label",
            content: "this is the longer text content that gives information"
        },
        {
            id: "d31t",
            label: "This is the 3st label",
            content: "this is the longer text content that gives information"
        },

    ]

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage