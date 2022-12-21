import Button from "../components/form-elements/Button";

function ConfirmedPage(props) {
    return <div>
        <p>Your signature for measure X has been sent</p>
        <Button to="./..">RETURN TO INITIATIVE INFO</Button>
    </div>;
}

export default ConfirmedPage;