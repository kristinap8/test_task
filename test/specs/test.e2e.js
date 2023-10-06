import { expect, browser } from '@wdio/globals'

describe('Testing html elements', () => {
    it('button should be clickable after entering valid credentials', async () => {
        await browser.url('https://ultimateqa.com/simple-html-elements-for-automation/')

        let name = await $('#et_pb_contact_name_0')
        name.setValue("Kristina")
        let email = await $('#et_pb_contact_email_0')
        email.setValue("kr@gmail.com")

        let button = await $('button[class="et_pb_contact_submit et_pb_button"]')
        await expect(button).toBeClickable()

    })
})

