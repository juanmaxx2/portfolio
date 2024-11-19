import Information from "./Information/Information"
import Profile from "./Profile/Profile"
import style from './Home.module.css';

function Home() {
    return (
        <div className={style.container}>
            <div className={style.home}>
                <Profile />
                <Information />
            </div>
        </div>
    )
}

export default Home
