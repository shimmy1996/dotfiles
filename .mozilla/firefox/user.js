// Menu bar.
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"urlbar-container\",\"downloads-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"developer-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"toolbar-menubar\",\"TabsToolbar\",\"PersonalToolbar\"],\"currentVersion\":15,\"newElementCount\":3}");
// Fonts.
user_pref("font.default.x-western", "sans-serif");
user_pref("font.name.monospace.ja", "Iosevka Term SS09");
user_pref("font.name.monospace.x-western", "Iosevka Term SS09");
user_pref("font.name.monospace.zh-CN", "Iosevka Term SS09");
user_pref("font.name.sans-serif.ja", "Noto Sans CJK JP");
user_pref("font.name.sans-serif.x-western", "Oxygen-Sans");
user_pref("font.name.sans-serif.zh-CN", "Noto Sans CJK SC");
user_pref("font.name.serif.ja", "Noto Serif CJK JP");
user_pref("font.name.serif.x-western", "Noto Serif");
user_pref("font.name.serif.zh-CN", "Noto Serif CJK SC");
// Search engine and urlbar.
user_pref("browser.search.update", false);
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
// Enable picture-in-picture.
user_pref("media.videocontrols.picture-in-picture.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.flyout-enabled", true);
// Newtab page.
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
// Disable pocket.
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
// Geo location.
user_pref("geo.enabled", false);
// WebRTC.
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.identity.timeout", 1);
// Cookies.
user_pref("privacy.firstparty.isolate", true);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
// Don't send referer information.
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// Finger printing and tracking.
// Resist fingerprinting disables per site zoom.
// user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);
// Disable Google Safe Browsing malware checks and phishing protection.
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
// Disable browser pings.
user_pref("browser.send_pings", false);
// Don't provide hardware infromation, including battery, microphone and camera.
user_pref("dom.battery.enabled", false);
user_pref("media.navigator.enabled", false);
// Don't mess with context menu and clipboard.
user_pref("dom.event.clipboardevents.enabled", false);
// Diable about:config warning.
user_pref("general.warnOnAboutConfig", false);
// Disable firefox intro tabs on the first start.
user_pref("browser.startup.homepage_override.mstone", "ignore");
// Don't check default browser.
user_pref("browser.shell.checkDefaultBrowser", false);
// Don't send tracking/diagonse information.
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
// Don't participate in experiments.
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
// Don't detect wifi login page.
user_pref("network.captive-portal-service.enabled", false);
// Don't send crash reports.
user_pref("browser.tabs.crashReporting.sendReport", false);
// Send do not check.
user_pref("privacy.donottrackheader.enabled", true);
// Disable beacons.
user_pref("beacon.enabled", false);
// Don't autofill forms or save logins.
user_pref("signon.autofillForms", false);
user_pref("browser.formfill.enable", false);
user_pref("signon.rememberSignons", false);
// Don't remember borwsing history.
user_pref("privacy.history.custom", true);
user_pref("places.history.enabled", false);
// Don't autohide the download button.
user_pref("browser.download.autohideButton", false);
// Enable U2F support.
user_pref("security.webauth.u2f", true);
// Disable WebGL.
user_pref("webgl.disabled", true);
// Don't warn when closing all tabs.
user_pref("browser.tabs.warnOnClose", false);
