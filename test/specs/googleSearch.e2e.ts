import googlePages from "../pageobjects/google.ts";
import {constants} from '../data/constants.ts';

describe('I go to google home page and use the search bar', () => {
    it('I use the search bar with the word Cats', async() => {
        await browser.url(constants.URLS.google);
        await googlePages.googleSearchBar.setValue('Cats');
        await browser.keys("\uE007");

    });
    it('I validate the search results page contains the word Cat', async() => {
        await googlePages.googleSearchResults('Cat').waitForDisplayed();
        expect(await googlePages.googleSearchResults('Cat').getText()).toEqual('Cat');
    });
});

describe('I go to google home page to check for links', () => {
    it('I iterate through all links and print the text', async() => {
        await browser.url(constants.URLS.google);
        const element = await $$('//a');
        for (let i = 0; i < element.length; i++) {
            const elementText = await element[i].getText();
            elementText !== '' && elementText !== undefined
                ? console.log(`link text:::`, elementText)
                : console.log(`No text found for element ${i}`);
        }
            
    });
});