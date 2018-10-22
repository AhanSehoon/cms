import Link from 'next/link'

const header  = () => (
    
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Never expand</a>
            <Link class="navbar-brand" href="/code/manage">
                    <a class="navbar-brand">코드관리</a>
            </Link>
        </nav>
        <ul>
            <li>
                <Link href="/code/manage">
                    <a>코드관리</a>
                </Link>
            </li>
            <li>
                <Link href="/menu/manage">
                    <a>메뉴관리</a>
                </Link>
            </li>
            <li>
                <Link href="/board/manage">
                    <a>게시판관리</a>
                </Link>
            </li>
            <li>
                <Link href="/user/manage">
                    <a>사용자관리</a>
                </Link>
            </li>
        </ul>
    </div>
)

export default header;