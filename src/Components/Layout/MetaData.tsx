import { Helmet } from 'react-helmet'

function MetaData({ title }: { title: string }) {
  return (
    <div data-testid="meta-data">
      <Helmet>
        <title>{`${title} - Ecommerce Amazon`}</title>
      </Helmet>
    </div>
  )
}

export default MetaData
