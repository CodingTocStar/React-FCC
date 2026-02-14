import '../estilo/footer.css'

export function Footer (){
    return(
        <footer>
            <ul className="footer-list">
                <li>Fitness Dashboard</li>
                <li>VIdeos</li>
                <li>Privacidad</li>
            </ul>
            <ul className="footer-list">
                <li>Servicios</li>
                <li>Discord</li>
                <li>Terminos y condiciones</li>
            </ul>
            <p>© 2026 CodingTocStar Footer. All Rights Reserved.</p>
            <ul className="footer-iconos">
                <li>
                    <a href="#">🎮</a>
                </li>
                <li>
                    <a href="#">🐦</a>
                </li>
                <li>
                    <a href="#">💻</a>
                </li>
            </ul>
        </footer>
    )
}