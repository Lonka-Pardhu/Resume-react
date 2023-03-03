export default function Skills(props) {
    return (
        <>
            <div className="skills">
                <h4>SKILLS</h4>
                <hr />
                <div className="list">
                    <ul>
                        <li>{props.data.skills.skill1}</li>
                        <li>{props.data.skills.skill2}</li>
                        <li className="js">{props.data.skills.skill3} <a href={props.data.certification.freeCodeCamp}>(Free Code Camp JavaScript Certificate)</a></li>
                    </ul>
                </div>
            </div>
            <div className="frameworks">
                <h4>FRAMEWORKS</h4>
                <hr />
                <div className="list">
                    <ul>
                        <li> {props.data.skills.frameWorks.frameWork1}</li>
                    </ul>
                </div>
            </div>
            <div className="tools">
                <h4>TOOLS</h4>
                <hr />
                <div className="list">
                    <ul>
                        <li>{props.data.skills.tools.tool1}</li>
                        <li>{props.data.skills.tools.tool2}</li>
                        <li>{props.data.skills.tools.tool3}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}