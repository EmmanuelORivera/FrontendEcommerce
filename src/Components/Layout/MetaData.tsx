import { Helmet } from 'react-helmet'

function MetaData({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{`${title} - Ecommerce Amazon`}</title>
    </Helmet>
  )
}

export default MetaData
