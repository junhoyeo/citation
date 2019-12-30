export const encodeString = (value: string): string => (
  window.btoa(
    encodeURIComponent(value)
  )
    .replace(/\./gi, '+')
    .replace(/_/gi, '/')
    .replace(/-/gi, '=')
);

export const decodeString = (encoded: string): string => (
  decodeURIComponent(
    window.atob(encoded),
  )
    .replace(/\+/gi, '.')
    .replace(/\//gi, '_')
    .replace(/=/gi, '-')
);

export const callbackAfterGenerate = (
  name: string,
  thanks: string,
  prefix: string,
  shareName: string,
  callback: (link: string) => void,
) => {
    const encodedData = [
      encodeString(name),
      encodeString(thanks),
      encodeString(prefix),
      encodeString(shareName),
    ].join('|');

    const rootURL = window.location.href.split('/').slice(0, -1).join('/');
    callback(`${rootURL}/result/${encodedData}`);
  };

export default callbackAfterGenerate;
