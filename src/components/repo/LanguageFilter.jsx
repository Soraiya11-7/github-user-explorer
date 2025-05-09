const LanguageFilter = ({ 
  languages, 
  selectedLanguage, 
  onLanguageChange 
}) => {
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onLanguageChange(e.target.value)}
      className=" px-1.5 py-1.5 md:px-3 md:py-2 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="all">All Languages</option>
      {languages.map(language => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageFilter;