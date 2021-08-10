import logo from '../img/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="front">
                <img src={logo} alt="Logo" />
                <h1>التوثـيق الموحد</h1>
                <p>لمشاريع إدارة التطوير والبرمجيات</p>
            </div>
        </header>
    )
}

export default Header