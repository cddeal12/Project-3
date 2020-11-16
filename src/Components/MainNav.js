import LogoutButton from '../Components/LogoutButton'

function MainNav() {
    return(
        <ul className="nav nav-tabs">
            <li className="nav-item mx-auto">
                <a href="/user-page">Your Page</a>
            </li>
            <li className="nav-item mx-auto">
                <a href="/meet-ups">Meet-Ups</a>
            </li>
            <li className="nav-item mx-auto">
                <a href="/new-meet-up">Post New Meet-Up</a>
            </li>
            <li className="nav-item mx-auto">
                <LogoutButton />
            </li>
        </ul>
    )
};

export default MainNav;