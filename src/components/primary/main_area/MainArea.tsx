import { ComponentItem } from "../../../models/ComponentItem";
import ComingSoon from "../coming_soon/ComingSoon";
import './MainArea.css'

interface MainAreaProps {
    selectedItem: ComponentItem
}

function MainArea(props: MainAreaProps) {

    const ComponentToRender = props.selectedItem.component;

    let comingSoon: boolean = props.selectedItem.component === ComingSoon;

    return(
        <div className="main-area m1-64 p-8 flex-1 h-screen">
            <h1 className="main-component-title">{props.selectedItem.name}</h1>
            {
                props.selectedItem.inspiration?.trim() ? 
                (<a className="inspiration-link" target="blank" href={props.selectedItem.inspiration}>See Inspiration</a>) 
                : ''
            }

            <div className="main-component-wrapper">
                {
                    comingSoon ? <ComingSoon name={props.selectedItem.name} /> :
                    <ComponentToRender key={props.selectedItem.name} />
                }
            </div>
        </div>
    )
}

export default MainArea;