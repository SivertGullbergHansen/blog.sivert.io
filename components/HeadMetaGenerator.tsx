import { meta } from 'config/meta'
import Head from 'next/head'
import React from 'react'

export function HeadMetaGenerator({ title, description, url, metaImg }: {title?: string, description?: string, url?: string, metaImg?: string}) {
  const tit = title ? `${meta.blogName} - ${title}` : meta.blogName
  const desc = description ?? meta.description
  const ur = url ? `${meta.url}/${url}` : meta.url
  const img = metaImg ? `/images/${metaImg}` : meta.metaImg

    return (<Head>
      <title>{tit}</title>
      <meta name="title" content={tit} />
<meta name="description" content={desc} />

<meta property="og:type" content="website" />
<meta property="og:url" content={ur} />
<meta property="og:title" content={tit} />
<meta property="og:description" content={desc} />
<meta property="og:image" content={img} />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={ur} />
<meta property="twitter:title" content={tit} />
<meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={img} />
    </Head>
  )
}
