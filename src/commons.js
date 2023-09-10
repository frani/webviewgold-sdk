/**
 * Reset App
 * @returns {void}
 */
const resetApp = () => {
  window.location.href = "reset://";
};

/**
 * Open QR Scanner
 * @returns {void}
 */
const openQRScanner = () => {
  window.location.href = "qrcode://";
};

/**
 * Sends a push notification.
 *
 * @param {Object} options - The options for the push notification.
 * @param {string} options.title - The title of the notification.
 * @param {string} options.message - The message of the notification.
 * @param {number} [options.seconds=120] - The number of seconds before the notification should be displayed.
 * @param {string} options.url - The URL to open when the notification is clicked.
 * @returns {void}
 */
const pushNotification = async ({
  title = "",
  message = "",
  seconds = 120,
  url = "",
}) => {
  window.location.href = `sendlocalpushmsg://push.send?s=${seconds}=msg!${message}&!#${title}&!#${url}`;
};

/**
 * Get UUID
 * @returns {string} UUID string
 */
const getUUID = () => {
  window.location.href = "get-uuid://";
  if (uuid) return uuid;
  return "00000000-0000-0000-0000-000000000000";
};

/**
 * Set Status Bar Color
 * @param {string} [color="255,0,0"] RGB color
 * @returns {void}
 */
const setStatusBarColor = (color = "255,0,0") => {
  window.location.href = `statusbarcolor://${color}`;
};

/**
 * Get App Version
 * @returns {object} version
 * @returns {number} version.versionNumber
 * @returns {number} version.bundleNumber
 */
const getAppVersion = () => {
  window.location.href = "getappversion://";
  const response = {
    versionNumber: "dev",
    bundleNumber: "dev",
  };
  if (window?.versionNumber) response.versionNumber = window.versionNumber;
  if (window?.bundleNumber) response.bundleNumber = window.bundleNumber;
  return response;
};

/**
 * Take Screenshot
 * @returns {void}
 */
const takeScreenshot = () => {
  window.location.href = `takescreenshot://`;
};

/**
 * Set Loading Spinner
 * @param {boolean} [active=true]
 */
const setLoadingSpinner = (active = true) => {
  if (active) window.location.href = `spinneron://`;
  else window.location.href = `spinneroff://`;
};

/**
 * Get Current Geolocation
 */
const getGeolocation = async () => {
  const payload = { success: false, data: null, message: "", errors: [] };
  try {
    const getCurrentPosition = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            reject(error);
          }
        );
      });
    };
    if (!navigator.geolocation) {
      payload.message = "Geolocation is not supported/allowed";
      return payload;
    }
    const geolocation = await getCurrentPosition();
    payload.success = true;
    payload.data = geolocation;
    payload.message = "ok";
    return payload;
  } catch (error) {
    console.error(error);
    payload.success = false;
    payload.data = null;
    payload.errors = payload.errors.concat(error.message);
    return payload;
  }
};

/**
 * Share Message
 * @param {string} title
 * @param {string} message
 * @returns {void}
 */
const share = (title = "", message = "") => {
  window.location.href = `shareapp://sharetext?=${message}&title=${title}`;
};

module.exports = {
  resetApp,
  openQRScanner,
  pushNotification,
  getUUID,
  setStatusBarColor,
  getAppVersion,
  takeScreenshot,
  setLoadingSpinner,
  getGeolocation,
  share,
};
