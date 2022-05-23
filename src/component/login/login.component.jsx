import {
    Container, LoginWrapper, Logo, LoginCotainer,
    LoginButton, CreateeAccount
} from './login.style'

const Login = () => {
    return (
        <Container>
            {/* <Logo>
                <img src='/images/naruto.png' alt='ninjanotes logo' />
            </Logo> */}
            <LoginWrapper>
                <h1>Ninja notes</h1>
                <form type='submit'>
                    <LoginCotainer>
                        <p>Login</p><span><input type='text' /></span>
                        <p>Password</p><span><input type='password' /></span>
                        <LoginButton>Login</LoginButton>
                        <span><CreateeAccount>or create an account ?</CreateeAccount></span>
                    </LoginCotainer>
                </form>
            </LoginWrapper>
        </Container>
    )
}

export default Login