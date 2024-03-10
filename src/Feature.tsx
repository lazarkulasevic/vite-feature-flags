import useFeature from "./UseFeature.hook"

type FeatureProps = {
  flag: string
  children: React.ReactNode | React.ReactNode[]
}

const Feature = ({ flag, children }: FeatureProps) => {
  const hasFeature = useFeature(flag)
  return hasFeature ? <>{children}</> : null
}

export default Feature
