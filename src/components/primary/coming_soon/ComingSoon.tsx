import './ComingSoon.css'

interface ComingSoonProps {
    name?: string
}

function ComingSoon(props: ComingSoonProps) {

    return(
        <div className="coming-soon-wrapper">
            <h1>Coming Soon to a React Project near you!</h1>
            <h2><span className="name">{props.name}</span> will be arriving shortly!</h2>
            <p>We thank you for your patience.</p>
        </div>
    )
}

export default ComingSoon;