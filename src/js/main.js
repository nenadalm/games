import {init, captureException, captureMessage} from '@sentry/browser/esm';

window.Sentry = {init, captureException, captureMessage};
