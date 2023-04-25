export const Nav =()=>{
    return (
        <div className="headder">
            <Title/>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <h4>Cart</h4>
            </ul>
        </div>
    );
}

const Title=()=>{
    return (
        <h2>Food Street</h2>
    )
}

export default Title;