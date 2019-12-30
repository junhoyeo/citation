import callbackAfterGenerate from './encoding';

export const onOpenPreview = (
  name: string, thanks: string, prefix: string, sender: string
): void => {
    callbackAfterGenerate(name, thanks, prefix, sender,
    (link: string) => {
      const win = window.open(link, '_blank');
      win?.focus();
    });
  }

export default onOpenPreview;
