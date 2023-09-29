import {useState} from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑",];


function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    const buttonStyle = {backgroundColor: '#7950f2', color: '#fff'}

    const handlePrevious = (event) => step > 1 && setStep( step =>step - 1);
    const handleNext = (event) => step < 3 && setStep(step =>step + 1);
    const handleIsOpen = (event) => setIsOpen(isOpen => !isOpen);

    return (<>
            <button type={"button"} className={"close"  } onClick={handleIsOpen}>&times;</button>
            {isOpen && (<div className={"steps"}>
                    <div className={"numbers"}>
                        <div className={(step >= 1) ? "active" : ""}>1</div>
                        <div className={(step >= 2) ? "active" : ""}>2</div>
                        <div className={(step >= 3) ? "active" : ""}>3</div>
                    </div>


                    <p className={"message"}>Step {step}: {messages[step - 1]} </p>

                    <div className="buttons">
                        <button type={"button"} style={buttonStyle}
                                onClick={handlePrevious}>Previous
                        </button>
                        <button type={"button"} style={buttonStyle}
                                onClick={handleNext}>Next
                        </button>
                    </div>

                </div>)}
        </>


    );
}

export default App;
