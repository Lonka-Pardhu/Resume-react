export default function Education(props) {
    return (
        <>
            <div className="education">
                <h4>EDUCATION</h4>
                <hr />
                <br />
                <div className="college">
                    <p>{props.data.education.studied.degree} in <b>{props.data.education.specializedIn.degree}</b></p>
                    <p>{props.data.education.yearOfPassing.college}</p>
                </div>
                <p><i>{props.data.education.degreeCollegeName} {props.data.education.degreeCollegeAt}</i></p>
                <br />
                <div className="intermediate">
                    <p>{props.data.education.studied.intermediate} in <b>{props.data.education.specializedIn.intermediate}</b></p>
                    <div>
                        <p>Year of Passing {props.data.education.yearOfPassing.intermediate}</p>
                        <p>{props.data.education.gpaInter}</p>
                    </div>
                </div>
                <p><i>{props.data.education.interCollegeName} {props.data.education.interCollegeAt}</i></p>

                <br />

                <div className="school">
                    <p>{props.data.education.studied.school} in <b>{props.data.education.specializedIn.school}</b></p>
                    <div>
                        <p>Year of Passing {props.data.education.yearOfPassing.school}</p>
                        <p>{props.data.education.gpaSchool}</p>
                    </div>
                </div>
                <p><i>{props.data.education.schoolName} {props.data.education.schoolAt}</i></p>
            </div>
        </>
    )
}
