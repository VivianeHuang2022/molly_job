export const getMenuItems = (texts) => {
  return [
    {
      key: 'coverletter',
      label: texts.homeTexts.coverletterTxt,
    },
    {
      key: 'recommendation',
      label: texts.homeTexts.recommendationTxt,
    },
    {
      key: 'resume',
      label: texts.homeTexts.resumeTxt,
    },
    {
      key: 'payment',
      label: texts.homeTexts.paymentTxt,
    },
  ];
};
export const profileItems = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#/generateCounts_history"
      >
        History
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Logout
      </a>
    ),
  },
];
