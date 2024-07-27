import './header.css'

function HeaderPage() {
    return (
        <>
            <div class="header">
                <div class="logo">
                <a href="http://127.0.0.1:5500/HTML/index.html"> <img 
                    src="/logo512.png"
                        alt="abcxyz" /></a>
                </div>
                <div class="mid-header">
                    <a href><span>New & Featured</span></a>
                    <a href><span>Men</span></a>
                    <a href><span>Women</span></a>
                    <a href><span>Kids</span></a>
                    <a href><span>Sale</span></a>
                    <a href><span>Customise</span></a>
                    <a href><span>SNKRS</span></a>
                </div>
                <div class="last-header">
                    <div class="search-header">
                        <i class="fa fa-solid fa-cat"></i><input
                            type="text" placeholder="Search"/>
                    </div>
                    <div class="last-header-2"> 
                        <i class="fa fa-solid fa-heart"></i>
                        <i class="fa fa-shopping-bag"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderPage