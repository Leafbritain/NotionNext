// import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

/**
 * Magzine主题的公告
 */
const Announcement = ({ post, className }) => {
  //   const { locale } = useGlobal()
  if (post?.blockMap) {
    return (
      <div className={className}>
        <section
          id='announcement-wrapper'
          className='rounded-xl px-2  wow fadeInUp' data-wow-delay='.2s'>
          {/* <div><i className='mr-2 fas fa-bullhorn' />{locale.COMMON.ANNOUNCEMENT}</div> */}
          {post && (
            <div id='announcement-content'>
              <NotionPage post={post}/>
            </div>
          )}
        </section>
      </div>
    )
  } else {
    return <></>
  }
}
export default Announcement
