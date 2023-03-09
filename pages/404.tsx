import { HeadMetaGenerator } from 'components/HeadMetaGenerator'
import MotionWrapper from 'components/MotionWrapper'
import StaggerWrapper from 'components/StaggerWrapper'
import { ArticleContentVariant, staggerTransition } from 'config/animations'
import { meta } from 'config/meta'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <HeadMetaGenerator title='404 Not Found' />
      <div className="w-screen h-screen grid place-content-center gap-4">
            <StaggerWrapper transition={staggerTransition} className="w-full h-full px-8 flex flex-col place-items-center gap-6">
          <MotionWrapper variants={ArticleContentVariant}>
              <h1 className="font-bold text-4xl md:text-6xl">
                  Page not found!
              </h1>
              <Link className='btn btn-outline' href='/'>
                  Go home
              </Link>
              </MotionWrapper>
          </StaggerWrapper>
    </div>
    </>
  )
}
