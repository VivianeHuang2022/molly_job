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
    key: 'generateCounts_history',
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
    key: 'about',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#/About">
        About
      </a>
    ),
  },
  {
    key: 'logout',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Logout
      </a>
    ),
  },
];
