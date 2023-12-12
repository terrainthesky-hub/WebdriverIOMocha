class GooglePages {
    /**
     * Search bar using Xpath
     */
    get googleSearchBar(): ChainablePromiseElement {
        return $('//textarea[@aria-label="Search"]')
    }
}

export default new GooglePages();