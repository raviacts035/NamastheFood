import React from "react"

const About=()=>{
    return (<>
        <h1 className="abt-title">About US</h1>
        <p>We are a group of service providers between food restaruents and Customers/ Consumers.<br/>
        We help busy people in delivering their food to their Doorsstep, giving value to their time</p>
    </>
)} 

export const Contact=()=>{
    return (<>
    <h2>This is a Contact Page....</h2>
    <Profile/>
    </>)
}


//class based Component created

class Profile extends React.Component{
    constructor(props){
        super();
        this.det={
            num:1,
        }
        console.log("Constructor")
    }
    render(){
        console.log("render")
        return(
            <>
                <h4>This is a Class Componen old : {this.det.num}</h4>
                <button onClick={()=>{
                    this.setDet({
                        num:12,
                        name:"ravi"
                    })
                }}>ResetAge</button>
            </>
        )
    }
    componentDidMount(){
        console.log("ComponentDid")
    }
}

export default About