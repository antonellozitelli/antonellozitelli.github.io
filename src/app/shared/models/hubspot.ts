export interface IFormHubspot {
  fields: [
    {
      name: string,
      value: string
    },
    {
      name: string,
      value: string
    },
    {
      name: string,
      value: string
    }
  ];
  context: {
    hutk: string,
    pageUri: string,
    pageName: string
  };
  legalConsentOptions: {
    consent: {
      consentToProcess: boolean,
      text: string
    }
  };
}

export interface IResponseHubspot {
  redirectUri?: string;
  inlineMessage?: string;
  errors?: string;
}
