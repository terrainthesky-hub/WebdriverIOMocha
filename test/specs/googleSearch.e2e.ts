import googlePages from "../pageobjects/google.ts";
import {constants} from '../data/constants.ts';

describe('I go to google home page and use the search bar', () => {
    it('I use the search bar', async() => {
        // const googleURL = 'http://google.com';
        await browser.url(constants.URLS.google);
        await googlePages.googleSearchBar.setValue('Cats');
        await browser.keys("\uE007");

    });
    it('I validate the search results page contains the word Cat', async() => {
        await $('//*[text()="Cat"][1]').waitForDisplayed();
        expect(await $('//*[text()="Cat"][1]').getText()).toEqual('Cat');
    });
});