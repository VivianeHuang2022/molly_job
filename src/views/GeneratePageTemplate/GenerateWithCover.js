import GenerateTemplate from './GenerateTemplate';

const GenerateWithCover = ({ documentType }) => {
  // const [isGetCover, setIsGetCover] = useState(false);
  const imageDirectoryMapping = {
    coverletter: {
      english: require.context(
        '../../assets/cover/coverletterEnglish',
        false,
        /\.(jpg)$/
      ),
      german: require.context(
        '../../assets/cover/coverletterGerman',
        false,
        /\.(jpg)$/
      ),
    },
    recommendation: {
      english: require.context(
        '../../assets/cover/recommendationEnglish',
        false,
        /\.(jpg)$/
      ),
      german: require.context(
        '../../assets/cover/recommendationGerman',
        false,
        /\.(jpg)$/
      ),
    },
    // 可以继续添加更多的文件类型和对应的图片目录
  };
  const fetchImages = (selectedLanguage) => {
    const imagesContexts = imageDirectoryMapping[documentType];

    // setIsGetCover(true);
    const files = imagesContexts[selectedLanguage]
      .keys()
      .map(imagesContexts[selectedLanguage]);
    return files;
  };
  return (
    <div>
      <GenerateTemplate fetchImages={fetchImages} documentType={documentType} />
    </div>
  );
};

export default GenerateWithCover;
