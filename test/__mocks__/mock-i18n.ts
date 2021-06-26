jest.mock('react-i18next', () => ({
  initReactI18next: { type: '3rdParty', init: jest.fn(), },
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
  },
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => { return true}),
      },
    };
  },
}));