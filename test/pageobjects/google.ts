class GooglePages {
    /**
     * Search bar using Xpath
     */
    get googleSearchBar(): ChainablePromiseElement {
        return $('//textarea[@aria-label="Search"]')
    }
    /**
     * Search text for search results using xpath
     * @param {string} search
     * @return {ChainablePromiseElement}
     */
    googleSearchResults(search: string): ChainablePromiseElement {
        return $(`//*[text()="${search}"][1]`)
    }
}

export default new GooglePages();