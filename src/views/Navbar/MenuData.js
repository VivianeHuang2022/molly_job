import { getLabels } from '../local';

const texts = getLabels();

export const menuItems = [
  {
    key: 'interview',
    label: texts.homeTexts.applicationTxt,
  },
  {
    key: 'coverletter',
    label: texts.homeTexts.coverletterTxt,
  },
  {
    key: 'recommendation',
    label: 'Recommendation',
  },
  {
    key: 'resume',
    label: texts.homeTexts.resumeTxt,
  },
  {
    key: 'payment',
    label: 'Payment',
  },
];

export const profileItems = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#/generateCounts_history"
      >
        Remain Counts
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Logout
      </a>
    ),
  },
];
