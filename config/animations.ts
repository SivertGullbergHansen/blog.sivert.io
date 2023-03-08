const exitAnimation = { opacity: 0, y: -5, transition: { duration: .2, ease: 'linear' } }
const transition = { type: 'spring', stiffness: 200 }
export const parentArticleTransition = { staggerChildren: 0.05 }
export const frontPageTransition = { staggerChildren: .05 }

export const ArticleCardVariant = {
    initial: { opacity: .0001, y: -33 },
    animate: { opacity: 1, y: 0, transition: transition },
    exit: exitAnimation,
}

export const ArticleContentVariant = {
    initial: { opacity: .0001, y: -50 },
    animate: { opacity: 1, y: 0, transition: transition },
    exit: exitAnimation,
}