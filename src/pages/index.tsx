import { GetStaticProps } from 'next'
import Home from '@/components/Pages/Home'

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'スターター'
    }
  }
}

const Page = () => {
  return <Home />
}

export default Page
