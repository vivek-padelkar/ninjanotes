import { Container, Logo, MenuWrapper, Menu } from './navbar.style'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutCircleRLine } from 'react-icons/ri'
const Navbar = () => {
    return (
        <Container>
            <Menu>
                <Logo>Ninja notes</Logo>
                <MenuWrapper>
                    <nav>
                        <CgProfile /><span>PROFILE</span>
                        <RiLogoutCircleRLine /><span>LOG OUT</span>
                    </nav>
                </MenuWrapper>
            </Menu>
        </Container>
    )
}

export default Navbar