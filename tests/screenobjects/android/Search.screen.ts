class SearchScreen {
    get friendName () {
        return $('//*[@resource-id="com.wahrcoder.messpin:id/name"]')
    }
}

export default new SearchScreen ();