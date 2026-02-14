import '../App.css'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="Nav">
                    <h3>Join EcoLife – Save Earth Today 🌱 <button className='btnnow'>Join Now</button></h3>
                </div>
            </header>

            <section>
                <div className='Navbar'>
                    <div className='logo'>
                        <img src="../ecolife_logo.png" alt="logo" />
                    </div>

                    <div className='NavContant'>
                        <a href="">Home</a>
                        <a href="">Campaigns</a>
                        <a href="">Plant Trees</a>
                        <a href="">Eco Tips</a>
                        <a href="">About Us</a>
                    </div>

                    <div className='newicons'>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" height="28" width="28" alt="search" />
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" height="28" width="28" alt="profile" />
                        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" height="28" width="28" alt="donate" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
