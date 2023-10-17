class SharingLinkScreen {
    get sharingLinkValue () {
      return $('//*[@resource-id="android:id/content_preview_text"]').getText();
    }
}


export default new SharingLinkScreen ();