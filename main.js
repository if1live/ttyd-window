chrome.app.runtime.onLaunched.addListener(() => {
  var url = 'http://127.0.0.1:7681';
  window.open(
      url, '',
      'chrome=no,close=yes,resize=yes,scrollbars=yes,minimizable=yes,' +
      'width=735,height=440,background');
  // Note: "background" here (and in the manifest) are to workaround
  // https://crbug.com/708870.  Once that hits stable, we can drop it.
});
