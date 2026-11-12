import  "./Profile.css"
import Avatar from "./Avatar"

function Card({ children }){
    const isExistingPerson = (children.props.name !== undefined);
    if(isExistingPerson){
        return (
            <div className="card">
                {children}
                <p>{children.props.name}</p>
            </div>
        )
    }
    else 
        return (
        <div className="card">
                {children}
                <p>No name</p>
        </div>
    )
}

export default function Profile(){
    return (
        <div className="profile-list">
            <Card>
                <Avatar
                    name= 'Katsuko Saruhashi'
                    imageId= 'YfeOqp2'
            />
            </Card>

            <Card>
                <Avatar/>
            </Card>

        </div>
    )
}