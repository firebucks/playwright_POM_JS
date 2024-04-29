import {test} from '@playwright/test'
import { LoginPage } from '../pages/login'

test('Login Page', async({page}) => {
    
    const Login = new LoginPage(page)
    await page.goto("https://www.saucedemo.com/")
    await Login.login('standard_user', 'secret_sauce')
})