export default function Projects(props) {
    return (
        <>
            <div className="projects">
                <h4>PROJECTS</h4>
                <hr />
                <div className="proj-style" >
                    <p><b><a href={props.data.projects.p1.gitRepo}>{props.data.projects.p1.title}</a></b></p>
                    <p>{props.data.projects.p1.Abstract}</p>
                    <p><b><a href={props.data.projects.p2.gitRepo}>{props.data.projects.p2.title}</a></b></p>
                    <p>{props.data.projects.p2.Abstract}</p>
                    <p><b><a href={props.data.projects.p3.gitRepo}>{props.data.projects.p3.title}</a></b></p>
                    <p>{props.data.projects.p3.Abstract}</p>
                </div>
            </div>
        </>
    )
}