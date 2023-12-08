import { useNavigate } from "react-router"

interface GoBackProps {
    text?: string
    class?: string
}

const GoBack = (props: GoBackProps) => {

    const navigate = useNavigate();

    return (
        <>
            <button className={props.class || 'btnError'} onClick={() => navigate(-1)}>{props.text || 'Go Back >'}</button>
        </>
    )
}

export default GoBack