declare const Kakao: any;

export const initializeKakaotalk = () => {
  Kakao.init('f4f0bfc40c7319e14532b359d217a29b');
};

export const shareWithKakaotalk = (shareLink: string, shareName: string): void => {
  Kakao.Link.createDefaultButton({
    container: '#kakao-share-button',
    objectType: 'feed',
    content: {
      title: `${shareName} 님께 새로운 감사장이 도착했어요!`,
      description: '🎉 아래 버튼을 눌러서 확인해 주세요.',
      imageUrl: 'https://raw.githubusercontent.com/junhoyeo/citation/master/src/assets/images/kakaotalk.png',
      link: {
        mobileWebUrl: shareLink,
        webUrl: shareLink,
      },
    },
    buttons: [
      {
        title: '지금 확인하기',
        link: {
          mobileWebUrl: shareLink,
          webUrl: shareLink,
        },
      },
    ],
  });
};

export const shareWithFacebook = (shareLink: string, shareName: string): void => {
  const shareTitle = `${shareName} 님께 새로운 감사장이 도착했어요!`;
  const shareURL = `https://www.facebook.com/sharer.php?u=${shareLink}&t=${shareTitle}`;
  window.open(shareURL, '', 'width=500,height=500,left=600');
};
