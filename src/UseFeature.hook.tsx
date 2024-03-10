const useFeature = (feature: string): boolean => {
  return __FEATURES__[feature]?.enabled === true
}

export default useFeature
