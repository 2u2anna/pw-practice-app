import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
await page.goto('http://localhost:4200/')
await page.getByText('Forms').click()
await page.getByText('Form Layouts').click()
})


test('Locator syntax rules', async({page}) => {
//find locator by tag name
await page.locator('input').first().click()

//find by id
page.locator('#inputEmail1')

//find by class value
page.locator('.shape-rectangle')

//find by attribute
page.locator('[placeholder="Email"]')

//find by entire class value
page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

//combine different selectors
page.locator('input[placeholder="Email"].shape-rectangle')

//find by XPath (NOT RECOMMENDED)
page.locator('//*[@id="inputEmaill"]')

//find by partial text match
page.locator(':text("Using")')

//find by exact text match
page.locator(':text-is("Using the Grid")')
})

test('User facing locators', async({page}) => {
await page.getByRole('textbox', {name: "Email"}).first().click()
await page.getByRole('button',{name: 'Sign in'}).first().click()

await page.getByLabel('Email').first().click()

await page.getByPlaceholder('Jane Doe').click()

await page.getByText('Using the Grid').click()

await page.getByTitle('IoT Dashboard').click()

await page.getByTestId('SignIn').click()
})

test('Locating child elements', async({page}) => {
await page.locator('nb-card nb-radio :text-is("Option 1")').click()
await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()
})