export const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    Ruby: '#701516',
    PHP: '#4F5D95',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Go: '#00ADD8',
    Rust: '#dea584',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Shell: '#89e051',
    'Objective-C': '#438eff',
    R: '#198CE7',
    Scala: '#c22d40',
    Dart: '#00B4AB',
    Elixir: '#6e4a7e',
    Clojure: '#db5855',
    'Vim script': '#199f4b',
    TeX: '#3D6117',
  };
  
  export const getLanguageColor = (language) => {
    return languageColors[language] || '#cccccc';
  };