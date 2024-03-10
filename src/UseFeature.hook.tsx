const config = await import(`../config/${import.meta.env.MODE}.yml`)

const useFeature = (feature: string): boolean => {
  const flag = config.default.features[feature]

  return flag?.enabled === true
}

export default useFeature
