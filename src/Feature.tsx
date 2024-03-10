import useFeature from "./UseFeature.hook"

type FeatureProps = {
  flag: string
  children: React.ReactNode | React.ReactNode[]
}

const Feature = ({ flag, children }: FeatureProps) => {
  const isFeatureEnabled = useFeature(flag)
  return isFeatureEnabled ? <>{children}</> : null
}

export default Feature
