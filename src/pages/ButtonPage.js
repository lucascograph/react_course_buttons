import Button from "../components/Button"
import { GoBell, GoFold, GoDatabase } from "react-icons/go"


function ButtonPage() {
    return (
        <div className="container">
            <div className="box">
                <Button primary><GoBell />Primary</Button>
                <Button secondary><GoFold />secondary</Button>
                <Button success><GoDatabase />success</Button>
                <Button warning>warning</Button>
                <Button danger>danger</Button>
                <Button>plain</Button>
            </div>
            <div className="box">
                <Button primary rounded>Primary</Button>
                <Button secondary rounded>secondary</Button>
                <Button success rounded>success</Button>
                <Button warning rounded>warning</Button>
                <Button danger rounded>danger</Button>
                <Button rounded>plain</Button>
            </div>
            <div className="box">
                <Button primary rounded outline>Primary</Button>
                <Button secondary rounded outline>secondary</Button>
                <Button success rounded outline>success</Button>
                <Button warning rounded outline>warning</Button>
                <Button danger rounded outline>danger</Button>
                <Button rounded outline>plain</Button>
            </div>
        </div>
    )
}

export default ButtonPage
